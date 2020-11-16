import React from 'react';
import './Home.css'
import Sidebar from './Sidebar'


const Home = () => {
    return (
        <div class='home__container2'>
            <div class='home__container'>
                <div class='home__sidebar'>
                    <Sidebar />
                </div>
                <div class='home__chat'>
                    Chatt
                </div>
            </div>
        </div>
    );
};

export default Home;