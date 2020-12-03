import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import Conversation from './Conversation'
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = (props) => {


    if (props.conversationsWithUser) {
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
                        props.usersInvolvedInConversation.map(userInvolvedInConversation => {
                            if (userInvolvedInConversation[0]._id != props.mainUser._id) {
                                return <Conversation
                                    name={userInvolvedInConversation[0].name}
                                    img={userInvolvedInConversation[0].imgSrc}
                                />
                            }

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