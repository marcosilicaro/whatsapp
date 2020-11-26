import React, { useEffect } from 'react';
import './Home.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import axios from './axios'


const Home = () => {

    return (
        <div class='home__container2'>
            <div class='home__container'>
                <div class='home__sidebar'>
                    <Sidebar />
                </div>
                <div class='home__chat'>
                    <Chat
                        name='Marco'
                        img='https://media-exp1.licdn.com/dms/image/C4E03AQEVjbeI7RfsgA/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=mZCODQ8mffbiw4vcLG2-zTqAWbhCvjwEBMS14DPs-nI' />
                </div>
            </div>
        </div>
    );
};

export default Home;