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
