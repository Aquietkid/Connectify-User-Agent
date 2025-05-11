import React from 'react'

import MainWindow from './chat-area/MainWindow'
import NavSidebar from './NavSidebar'
import Sidebar from './Sidebar'
import ChatAreaProvider from '../context/ChatAreaContext'

function Home() {
    return (
        <>
            <div className='flex flex-row'>
                <NavSidebar />
                <div className="flex h-screen w-full">
                    <div className="w-96 overflow-x-auto">
                        <Sidebar />
                    </div>
                    <div className="flex-1 overflow-x-auto w-full">
                        <ChatAreaProvider>
                            <MainWindow />
                        </ChatAreaProvider>
                        {/* <ProfileComponent isFriend={true} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home