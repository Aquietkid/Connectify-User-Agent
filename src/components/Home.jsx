import React from 'react'
import { Link } from 'react-router-dom'
import MainWindow from './chat-area/MainWindow'
import NavSidebar from './NavSidebar'
import Sidebar from './Sidebar'
import ChatAreaProvider from '../context/ChatAreaContext'

function Home() {
    return (
        <div className='flex flex-row h-screen w-full'>
            <NavSidebar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 overflow-x-auto">
                    <div className="p-4 flex space-x-4">
                        <Link 
                            to="/my-profile" 
                            className="text-black hover:text-gray-700 font-medium border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            My Profile
                        </Link>
                        <Link 
                            to="/profile" 
                            className="text-black hover:text-gray-700 font-medium border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            View Profile
                        </Link>
                        <Link 
                            to="/friend-requests" 
                            className="text-black hover:text-gray-700 font-medium border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            Friend Requests
                        </Link>
                    </div>
                    <ChatAreaProvider>
                        <MainWindow />
                    </ChatAreaProvider>
                </div>
            </div>
        </div>
    )
}

export default Home