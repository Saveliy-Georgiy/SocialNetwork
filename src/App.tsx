import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    addPost: () => void
    changeTextarea: (newPostText: string) => void
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
                           element={
                               <Profile
                                   posts={state.profilePage.posts}
                                   newPostText={state.profilePage.newPostText}
                                   changeTextarea={props.changeTextarea}
                                   addPost={props.addPost}/>}/>
                    <Route path="/dialogs"
                           element={
                               <Dialogs
                                   dialogs={state.dialogsPage.dialogs}
                                   messages={state.dialogsPage.messages}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
