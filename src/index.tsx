 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import {HashRouter} from 'react-router-dom';

 export type PostType = {
     id: number
     message: string
     likes: number
 }

 export type DialogsItemType = {
     id: number
     name: string
 }

 export type MessageType = {
     id: number
     message: string
 }

 const posts = [
     {id: 1, message: "Hi, how a you?", likes: 25},
     {id: 2, message: "It's my first post", likes: 15},
     {id: 3, message: "Yo", likes: 33},
 ]

 const dialogs = [
     {id: 1, name: "Saveliy"},
     {id: 2, name: "Dima"},
     {id: 3, name: "Egor"},
     {id: 4, name: "Artem"},
     {id: 5, name: "Vano"},
 ]

 const messages = [
     {id: 1, message: "Yo"},
     {id: 2, message: "How are you?"},
     {id: 3, message: "Hello"},
     {id: 4, message: "Nice project"},
     {id: 5, message: "What am I doing here?"},
 ]

ReactDOM.render(
  <React.StrictMode>
      <HashRouter>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
