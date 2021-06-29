import React from 'react'
import './App.css';
import {nanoid} from 'nanoid'
import Messages from "../Messages/Messages";
import SendForm from "../SendForm/SendForm";


function App() {
    /**
     * Функция для генерериования id пользователя
     */
    const setId = () => {
        if (localStorage.getItem('owner_id')) {
            return
        }
        const owner_id = nanoid(3);
        localStorage.setItem('owner_id', owner_id)
    }

    React.useEffect(() => {
        setId();
    })

    return (
        <div className='container'>
            <Messages/>
            <SendForm/>
        </div>
    )
}

export default App;
