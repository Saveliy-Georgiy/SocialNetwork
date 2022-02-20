import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {StoreType} from "./redux/redux-store";
import {ActionsTypes} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType,
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <div className="appWrapper">
            <Header/>
            <Navbar friends={state.sidebar.friends}/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path="/profile"
                           element={<Profile store={props.store}/>}/>
                    <Route path="/dialogs"
                           element={<DialogsContainer store={props.store}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
