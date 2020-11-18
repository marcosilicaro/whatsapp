import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Conversation.css'

const Conversation = (props) => {
    return (
        <div className='conversation__container'>
            <div className='conversation__avatar'>
                <Avatar alt={props.name} src={props.img} />
            </div>
            <div className='conseration__information'>
                <div className='conversation__title'>
                    {props.name}
                </div>
                <div className='conversation__lastText'>
                    (ultimo mensaje)
                </div>
            </div>
        </div>
    );
};

export default Conversation;