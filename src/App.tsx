import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="appWrapper">
            <Header/>
            <Navbar/>
               <div className="appWrapperContent">
            <Dialogs/>
           {/*  <Profile/>*/}
            </div>

        </div>
    );
}

export default App;
