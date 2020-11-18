import React from 'react';
import './Sidebar.css'
import Conversation from './Conversation'
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
            <div className='sidebar__conversations'>
                <Conversation
                    name='MIS'
                    img='https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg'
                />
                <Conversation
                    name='Franco'
                    img=''
                />
                <Conversation
                    name='Flor'
                    img=''
                />
            </div>
        </div>
    );
};

export default Sidebar;