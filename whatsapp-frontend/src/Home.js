import React, { useEffect, useState } from 'react';
import './Home.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import axios from './axios'



const Home = () => {


    // hardcoded main user
    const [mainUser, setmainUser] = useState([])
    useEffect(() => {
        axios.get('/users/5fbf8b0f2fd14d544c5ed3b4').then((response) => {
            setmainUser(response.data)
            mainUser[0] ? console.log('main user loaded') : console.log('loading user..')
        }
        )
    }, mainUser[0] ? [] : null)




    if (mainUser[0]) {
        return (
            <div class='home__container2'>
                <div class='home__container'>
                    <div class='home__sidebar'>
                        <Sidebar mainUser={mainUser[0]} />
                    </div>
                    <div class='home__chat'>
                        <Chat
                            name={'Marco'}
                            img='https://media-exp1.licdn.com/dms/image/C4E03AQEVjbeI7RfsgA/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=mZCODQ8mffbiw4vcLG2-zTqAWbhCvjwEBMS14DPs-nI' />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>Loading</div>
        )
    }
};

export default Home;