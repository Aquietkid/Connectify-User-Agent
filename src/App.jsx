import './App.css'
import Auth from './components/Auth'
import Home from './components/Home'
import _404Page from './components/_404Page'
import PrivateRoute from './components/PrivateRoute'
import ProfilePage from './pages/ProfilePage'
import FriendRequests from './components/FriendRequests'
import MyProfile from './components/MyProfile'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GroupProfile from './components/group-profile/GroupProfile'
import MyFriends from './components/MyFriends'


/**
 * 
 *        ____             __                   __  __    _     
 *       / __ \___  ____  / /___ _________     / /_/ /_  (_)____
 *      / /_/ / _ \/ __ \/ / __ `/ ___/ _ \   / __/ __ \/ / ___/
 *     / _, _/  __/ /_/ / / /_/ / /__/  __/  / /_/ / / / (__  ) 
 *    /_/ |_|\___/ .___/_/\__,_/\___/\___/   \__/_/ /_/_/____/  
 *              /_/                                             
 *        ____                 __  _                         _ __  __  
 *       / __/_  ______  _____/ /_(_)___  ____     _      __(_) /_/ /_ 
 *      / /_/ / / / __ \/ ___/ __/ / __ \/ __ \   | | /| / / / __/ __ \
 *     / __/ /_/ / / / / /__/ /_/ / /_/ / / / /   | |/ |/ / / /_/ / / /
 *    /_/  \__,_/_/ /_/\___/\__/_/\____/_/ /_/    |__/|__/_/\__/_/ /_/ 
 *                                                                     
 *        ___    ____  ____              ____    
 *       /   |  / __ \/  _/  _________ _/ / /____
 *      / /| | / /_/ // /   / ___/ __ `/ / / ___/
 *     / ___ |/ ____// /   / /__/ /_/ / / (__  ) 
 *    /_/  |_/_/   /___/   \___/\__,_/_/_/____/  
 *                                               
 */

function getFriends() {
  return [
    {
      name: 'Rick Sanchez',
      profilePicture: 'https://i.pravatar.cc/150?img=1',
      description: 'A decoy created by a decoy for emergency'
    },
    {
      name: 'Jack Sparrow',
      profilePicture: 'https://i.pravatar.cc/150?img=5',
      description: 'Black is on auction. Hurry up and get the fastest ship'
    },
    {
      name: 'Michael Corleone',
      profilePicture: 'https://i.pravatar.cc/150?img=7',
      description: 'CEO at Corleone Casino Ltd. Miami'
    },
    {
      name: 'Tony Stark',
      profilePicture: 'https://i.pravatar.cc/150?img=10',
      description: 'Genius billionaire playboy philanthropist'
    },
    {
      name: 'Bruce Wayne',
      profilePicture: 'https://i.pravatar.cc/150?img=12',
      description: 'The Dark Knight'
    }
  ];
}


function App() {
  const { isAuthenticated } = useSelector(state => state.user);

  return (
    <Router>
      <Routes>
        <Route path='/signin' element={!isAuthenticated ? <Auth /> : <Navigate to="/" />} />
        <Route path='/signup' element={!isAuthenticated ? <Auth /> : <Navigate to="/" />} />
        <Route path='/' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/home' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='/profile' element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        } />
        <Route path='/my-profile' element={
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        } />
        <Route path='/my-friends' element={
          <div className='container mx-auto p-4'>
            <MyFriends friends={getFriends} isMembersView={true} />
          </div>
        } />
        <Route path='/group-profile' element={
          <PrivateRoute>
            <GroupProfile />
          </PrivateRoute>
        } />
        <Route path='/friend-requests' element={
          <PrivateRoute>
            <FriendRequests />
          </PrivateRoute>
        } />
        <Route path='*' element={<_404Page />} />
      </Routes>
    </Router>
  )
}

export default App
