import React from 'react';
import './Messages.css';
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../index";

function Messages() {
    const {firestore} = React.useContext(Context);

    /**
     * Получаем массив сообщений из firestore
     */
    const [messages] = useCollectionData(firestore.collection('messages').orderBy('createdAt'));

    /**
     * Скролл к концу блока сообщений
     */
    const el = React.useRef(null);
    React.useEffect(() => {
        el.current.scrollIntoView({ block: 'end'});
    }, [messages]);

    return (
        <div className='messages-wrap'>
            { messages ?
                messages.map(message =>
                    <div className={`message ${message.owner_id === localStorage.getItem('owner_id') ? 'owner_message' : ''}`} key={message.id}>
                        <div className="avatar"/>
                        <p className='message_text'>{message.text}</p>
                    </div>
                ) : ''}
            <div id={'el'} ref={el}/>
        </div>
    )
}

export default Messages;
