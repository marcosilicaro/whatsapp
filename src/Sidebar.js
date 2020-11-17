import React from 'react';
import './Sidebar.css'
import Avatar from '@material-ui/core/Avatar';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

const Sidebar = () => {
    return (
        <div className='sidebar__container'>
            <div className='sidebar__header'>
                <div className='sidebar__avatar'>
                    <Avatar alt="Remy Sharp" src="https://vingloo.com/wp-content/uploads/2018/08/2_2048x.jpg" />
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
            <div className='sidebar__conversation'>
                Conversation 1
            </div>
        </div>
    );
};

export default Sidebar;