import React from 'react';
import './Message.css'

const Message = (props) => {
    return (
        <div className={`message__container ${props.status}`}>
            <div className='message__user'>
                {props.user}
            </div>
            <div className='message__text'>
                {props.text}
            </div>
        </div >
    );
};

export default Message;