import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';
import {addPost, changeTextarea} from "./redux/state";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App appState={state} addPost={addPost} changeTextarea={changeTextarea}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()

subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
