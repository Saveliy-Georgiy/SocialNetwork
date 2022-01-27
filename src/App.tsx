import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    appState: RootStateType
    addPostCallBack: (postText: string) => void
    changeTextarea: () => void
}

const App = (props: AppPropsType) => {
    return (
        <div className="appWrapper">
            <Header/>
            <Navbar friends={props.appState.sidebar.friends}/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path="/profile"
                           element={
                               <Profile
                                   posts={props.appState.profilePage.posts}
                                   changeTextarea={props.changeTextarea}
                                   addPostCallBack={props.addPostCallBack}/>}/>
                    <Route path="/dialogs"
                           element={
                               <Dialogs
                                   dialogs={props.appState.dialogsPage.dialogs}
                                   messages={props.appState.dialogsPage.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
