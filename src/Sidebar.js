import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar__container'>
            <div className='sidebar__header'>
                Header
            </div>
            <div className='sidebar__searchBar'>
                Search
            </div>
            <div className='sidebar__conversation'>
                Conversation 1
            </div>
        </div>
    );
};

export default Sidebar;