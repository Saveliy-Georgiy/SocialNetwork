import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {DialogsItemType, MessageType, PostType} from '.';

type AppPropsType = {
    posts: Array<PostType>
    dialogs: Array<DialogsItemType>
    messages: Array<MessageType>
}

const App = (props: AppPropsType) => {
    return (
            <div className="appWrapper">
                <Header/>
                <Navbar/>
                <div className="appWrapperContent">
                    <Routes>
                        <Route path="/profile" element={<Profile posts={props.posts}/>}/>
                        <Route path="/dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
