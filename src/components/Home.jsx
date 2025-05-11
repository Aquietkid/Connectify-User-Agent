import React from 'react'

import ChatArea from './chat-area/ChatArea'
import NavSidebar from './NavSidebar'
import Sidebar from './Sidebar'
import ChatAreaProvider from '../context/ChatAreaContext'
import Profile from './personal-profile/Profile'
import { useSelector } from 'react-redux'


function Home() {
    const { type } = useSelector(state => state.mainWindow);
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
                    <ChatAreaProvider>
                        <MainWindow />
                    </ChatAreaProvider>
                </div>
            </div>
        </>
    )
}

export default Home