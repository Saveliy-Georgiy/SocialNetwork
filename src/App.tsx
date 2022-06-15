import React, {ComponentType} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer, {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import store, {AppStateType} from "./redux/reduxStore";
import Preloader from "./components/common/Preloader/Preloader";

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
                <HeaderContainer/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Routes>
                        <Route path="/profile/*"
                               element={<ProfileContainer/>}/>
                        <Route path="/dialogs"
                               element={<DialogsContainer/>}/>
                        <Route path="/users"
                               element={<UsersContainer/>}/>
                        <Route path="/login"
                               element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<ComponentType>(
    withRouter,
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
