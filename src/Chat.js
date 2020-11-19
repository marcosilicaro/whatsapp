import React from 'react';
import './Chat.css'

import Message from './Message'

import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Chat = (props) => {
    return (
        <div className='chat__container'>
            <div className='chat__header'>
                <div className='chat__avatar'>
                    <Avatar
                        alt={props.name}
                        src={props.img}
                    />
                </div>
                <div className='chat__info'>
                    <div className='chat__title'>
                        Chat Room
                    </div>
                    <div className='chat__lastSeen'>
                        Last Seen Today
                    </div>
                </div>
                <div className='chat__icons'>
                    <div><DonutLargeIcon /></div>
                    <div><MessageIcon /></div>
                    <div><MoreVertIcon /></div>
                </div>
            </div>
            <div className='chat__display'>
                <Message text='Hols florchi' user='Marco' />
                <Message text='Hola maco' user='Flor' status='received' />
                <Message text='Te odio' user='Marco' />
                <Message text='Te amo' user='Marco' />
                <Message text='Te odio' user='Marco' />
                <Message text='Te amo' user='Marco' />
                <Message text='Te odio' user='Marco' />
                <Message text='Te amo' user='Marco' />
                <Message text='Te odio' user='Marco' />
                <Message text='Te amo' user='Marco' />
                <Message text='Te odio' user='Marco' />
                <Message text='Te amo' user='Marco' />

            </div>
            <div className='chat__input'>
                Input
            </div>
        </div>
    );
};

export default Chat;