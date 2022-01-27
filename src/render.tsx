import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {addPost, changeTextarea, RootStateType} from "./redux/state";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App appState={state} addPostCallBack={addPost} changeTextarea={changeTextarea}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}