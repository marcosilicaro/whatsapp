import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import Conversation from './Conversation'
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import axios from './axios'

const Sidebar = (props) => {

    const [conversationsWithUser, setconversationsWithUser] = useState([])
    const [usersInvolvedInConversation, setusersInvolvedInConversation] = useState([])

    useEffect(() => {

        // importa conversaciones en la cual esta involucrado el main user
        axios.get(`/conversations/${props.mainUser._id}`).then((response) => {
            setconversationsWithUser(response.data)
            //conversationsWithUser[0] ? console.log(conversationsWithUser) : console.log('loading conversations..')
            conversationsWithUser[0] ? console.log('main user conversations imported!') : console.log('loading main user conversations..')
        }
        )

        // importa a los usuarios con los que tiene una conversacion el main user
        if (conversationsWithUser.length > 0) {
            conversationsWithUser.map(conversation => {
                conversation.userIdsInvolved.map(receivingUserId => {
                    if (receivingUserId !== props.mainUser._id) {
                        axios.get(`/users/${receivingUserId}`).then((response) => {
                            setusersInvolvedInConversation(usersInvolvedInConversation => [...usersInvolvedInConversation, response.data])
                        }
                        )
                    }
                })
            })
        }
    }, conversationsWithUser.length > 0 ? [] : null)

    if (conversationsWithUser) {
        return (
            <div className='sidebar__container'>
                <div className='sidebar__header'>
                    <div className='sidebar__avatar'>
                        <Avatar alt="Remy Sharp" src={props.mainUser.imgSrc} />
                    </div>
                    <div className='sidebar__icons'>
                        <div><DonutLargeIcon /></div>
                        <div><MessageIcon /></div>
                        <div><MoreVertIcon /></div>
                    </div>
                </div>
                <div className='sidebar__searchBar'>
                    <div className='sidebar__searchIcon'>
                        <SearchIcon />
                    </div>
                    <div className='sidebar__input'>
                        <input />
                    </div>
                </div>
                <div className='sidebar__conversations'>
                    {
                        usersInvolvedInConversation.map(userInvolvedInConversation => {
                            return <Conversation
                                name={userInvolvedInConversation[0].name}
                                img={userInvolvedInConversation[0].imgSrc}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
    else {
        return <div>Loading conversations..</div>
    }
};

export default Sidebar;