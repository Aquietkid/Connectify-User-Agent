import './App.css'
import MainWindow from './components/chat-area/MainWindow'
import NavSidebar from './components/NavSidebar'
import Sidebar from './components/Sidebar'
import ProfileComponent from './components/ProfileComponent'
import Auth from './components/Auth'
import ChatAreaProvider from './context/ChatAreaContext'


function App() {

  return (
    <>
      {/* <Auth /> */}
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

export default App;