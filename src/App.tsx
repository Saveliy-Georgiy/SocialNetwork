import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

    return (
        <div className="appWrapper">
            <Header/>
            <Navbar/>
            <div className="appWrapperContent">
                <Routes>
                    <Route path="/profile"
                           element={<Profile/>}/>
                    <Route path="/dialogs"
                           element={<DialogsContainer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
