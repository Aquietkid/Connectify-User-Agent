import React, { useEffect } from 'react'

import ChatArea from './chat-area/ChatArea'
import NavSidebar from './NavSidebar'
import Sidebar from './Sidebar'
import ChatAreaProvider from '../context/ChatAreaContext'
import Profile from './personal-profile/Profile'
import { useDispatch, useSelector } from 'react-redux'
import socket from '../config/socket'
import { setActiveUsers, userJoined, userLeft } from '../app/activeUsersSlice'
import { getActiveUsers } from '../api/user'


function Home() {
    const { type } = useSelector(state => state.mainWindow);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)

    useEffect(() => {
        async function fetchActiveUsers() {
            const res = await getActiveUsers()
            if (res) {
                dispatch(setActiveUsers(res.data))
            }
        }
        fetchActiveUsers()
    }, [])

    useEffect(() => {
        if (socket) {
            // this must be emitted to notify backend that i am online
            socket.emit("active", { userId: user._id });

            socket.on("userJoined", (userId) => {
                dispatch(userJoined(userId))
            })

            socket.on("userLeft", (userId) => {
                dispatch(userLeft(userId))
            })

            return () => {
                socket.off("userJoined")
                socket.off("userLeft")
            }
        }
    }, [socket])

    return (
        <>
            <div className='flex flex-row'>
                <NavSidebar />
                <div className="flex h-screen w-full">
                    <div className="w-96 overflow-x-auto">
                        <Sidebar />
                    </div>
                    <div className="flex-1 overflow-x-auto w-full">
                        {
                            (() => {
                                switch (type) {
                                    case "chatArea":
                                        return (
                                            <ChatAreaProvider>
                                                <ChatArea />
                                            </ChatAreaProvider>
                                        )
                                    case "personalInfo":
                                        return (
                                            <Profile />
                                        )
                                    default:
                                        return <></>
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home