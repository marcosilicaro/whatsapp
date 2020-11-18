import React from 'react';
import './Home.css'
import Sidebar from './Sidebar'
import Chat from './Chat'


const Home = () => {
    return (
        <div class='home__container2'>
            <div class='home__container'>
                <div class='home__sidebar'>
                    <Sidebar />
                </div>
                <div class='home__chat'>
                    <Chat />
                </div>
            </div>
        </div>
    );
};

export default Home;