import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";

/**
 * Конфигурация firebase
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, appId: string, projectId: string, authDomain: string}}
 */
const firebaseConfig = {
    apiKey: "AIzaSyDPmIb86RUCrW5NjuozadrOpmZHw9PHnp8",
    authDomain: "womanup-chat-2fdf2.firebaseapp.com",
    projectId: "womanup-chat-2fdf2",
    storageBucket: "womanup-chat-2fdf2.appspot.com",
    messagingSenderId: "288479776272",
    appId: "1:288479776272:web:1b8459473dd4d8a2e54495"
};


firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

/**
 * Задаем контекст со значением null
 * @type {React.Context<null>}
 */
export const Context = React.createContext(null);



ReactDOM.render(
    <Context.Provider value={{firestore}}>
        <App/>
    </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
