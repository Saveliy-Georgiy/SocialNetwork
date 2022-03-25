import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login';

const App = () => {

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

export default App;
