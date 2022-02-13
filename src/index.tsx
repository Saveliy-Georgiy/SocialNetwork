import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter} from 'react-router-dom';
import store from "./redux/state";


const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App store={store} dispatch={store.dispatch.bind(store)}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree()

store.subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
