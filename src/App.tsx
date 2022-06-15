import React, {ComponentType, Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import store, {AppStateType} from "./redux/reduxStore";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))
const HeaderContainer = React.lazy(() => import("./components/Header/HeaderContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

export type AppPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    initialized: boolean
}

type MapDispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<AppPropsType, {}> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="appWrapper">
                <Suspense fallback={<div><Preloader/></div>}>
                <HeaderContainer/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Routes>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Routes>
                </div>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(
    connect(mapStateToProps, {initializeApp,}))(App);

const MainApp = () => {
    return (
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
)}

export default MainApp;
