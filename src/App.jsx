import './App.css'
import MainWindow from './components/MainWindow'
import NavSidebar from './components/NavSidebar'
import Sidebar from './components/Sidebar'
import ProfileComponent from './components/ProfileComponent'
import Auth from './components/Auth'


function App() {

  return (
    <>
      <Auth />
      <div className='flex flex-row'>
        <NavSidebar />
        <div className="flex h-screen">
          <div className="w-96 overflow-x-auto">
            <Sidebar />
          </div>
          <div className="flex-1 overflow-x-auto">
            <MainWindow />
            {/* <ProfileComponent isFriend={true} /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;