import React from 'react';
import './SendForm.css'
import {nanoid} from "nanoid";
import firebase from "firebase";
import {Context} from "../../index";


function SendForm() {

    const {firestore} = React.useContext(Context)
    const [value, setValue] = React.useState('');

    /**
     * Отправка сообщений
     */
    const sendMessage = () => {
        if (value === '') {
            return
        }
        firestore.collection('messages').add({
            id: nanoid(4),
            owner_id: localStorage.getItem('owner_id'),
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
            .catch((error) => {
                console.log(error);
            });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        sendMessage();
        setValue('');
    }

    return (
        <form className='send_form' onSubmit={event => submitHandler(event)}>
            <input type='text' className='text'
                   value={value}
                   onChange={e => setValue(e.target.value)}
            />
            <button type='submit' className='send_button'>Отправить</button>
        </form>
    )
}

export default SendForm;
