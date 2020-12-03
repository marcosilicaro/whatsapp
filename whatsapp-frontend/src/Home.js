import React, { useEffect, useState } from 'react';
import './Home.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import axios from './axios'
import { BrowserRouter, Route } from 'react-router-dom'

const Home = () => {
    const [mainUser, setmainUser] = useState([])
    const [conversationsWithUser, setconversationsWithUser] = useState([])
    const [usersInvolvedInConversation, setusersInvolvedInConversation] = useState([])
    const [receivingUserName, setreceivingUserName] = useState([])
    const [receivingUserImage, setreceivingUserImage] = useState([])
    const [conversationWithReceivingUser, setconversationWithReceivingUser] = useState([])

    useEffect(() => {
        // hardcoded main user
        axios.get('/users/5fbf8b0f2fd14d544c5ed3b4').then((response) => {
            setmainUser(response.data)
            // importa conversaciones en la cual esta involucrado el main user
            axios.get(`/conversations/5fbf8b0f2fd14d544c5ed3b4`).then((response) => {
                setconversationsWithUser(response.data)
            }
            )
            // importa a los usuarios con los que tiene una conversacion el main user
            if (conversationsWithUser.length > 0) {
                conversationsWithUser.map(conversation => {
                    conversation.userIdsInvolved.map(receivingUserId => {
                        if (receivingUserId !== mainUser._id) {
                            axios.get(`/users/${receivingUserId}`).then((response) => {
                                setusersInvolvedInConversation(usersInvolvedInConversation => [...usersInvolvedInConversation, response.data])
                            }
                            )
                        }
                    })
                })
            }
        }
        )
    }, conversationsWithUser[0] ? [] : null)






    if (mainUser[0]) {
        // return del usuario al que se la pase su id como argumento
        const getUserName = (id) => {
            axios.get(`/users/${id}`).then((response) => {
                setreceivingUserName(response.data[0].name)

            })
            return receivingUserName
        }

        const getUserImg = (id) => {
            axios.get(`/users/${id}`).then((response) => {
                setreceivingUserImage(response.data[0].imgSrc)

            })
            return receivingUserImage
        }

        return (
            <div class='home__container2'>
                <div class='home__container'>
                    <div class='home__sidebar'>
                        <Sidebar
                            mainUser={mainUser[0]}
                            usersInvolvedInConversation={usersInvolvedInConversation}
                            conversationsWithUser={conversationsWithUser}
                        />
                    </div>
                    <BrowserRouter>
                        <div class='home__chat'>
                            {/* en este route se pasa id de un user en la url y con getUser se devuelve ese usuario */}
                            {/* chat deberia recibir name, img, y la conversacion entera con el receivingUser  */}
                            {/* despues el chat se encarga del display  */}
                            {/* despues, en sidebar se hace un link para que ejecute estos routes */}

                            {/* ACA!!!! Ahora hacer conversationWithReceivingUser!!!!! */}
                            {/* de las conversationsWithUser, buscas las que este el mainuser y el receivingUserId */}
                            <Route
                                path='/:receivingUserId'
                                render={(props) => (

                                    <Chat
                                        name={getUserName(props.match.params.receivingUserId)}
                                        img={getUserImg(props.match.params.receivingUserId)}
                                        conversation={'conversation'}
                                    />
                                )}
                            />

                        </div>
                    </BrowserRouter>
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