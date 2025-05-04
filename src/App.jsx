import './App.css';
import NavSidebar from './components/NavSidebar';
import Sidebar from './components/Sidebar';
import ProfileComponent from './components/ProfileComponent';

function App() {
  return (
    <div className='flex h-screen w-full'>
      {/* Left navigation sidebar */}
      <NavSidebar />
      
      {/* Main content area with sidebar and profile */}
      <div className='flex flex-1 overflow-hidden'>
        {/* Contacts sidebar */}
        <div className='w-96 border-r border-gray-200 overflow-y-auto'>
          <Sidebar />
        </div>
        
        {/* Profile content - takes all remaining space */}
        <div className='flex-1 overflow-y-auto'>
          <ProfileComponent isFriend={true} /> {/* Set isFriend based on your logic */}
        </div>
      </div>
    </div>
  );
}

export default App;