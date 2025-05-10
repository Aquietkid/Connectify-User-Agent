import './App.css'
import Auth from './components/Auth'
import Home from './components/Home'
import _404Page from './components/_404Page'
import PrivateRoute from './components/PrivateRoute'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainWindow from './components/chat-area/MainWindow'
import NavSidebar from './components/NavSidebar'
import Sidebar from './components/Sidebar'
import ProfileComponent from './components/ProfileComponent'
import Auth from './components/Auth'
import ChatAreaProvider from './context/ChatAreaContext'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<Auth />} />
        <Route path='/signup' element={<Auth />} />
        <Route path='/home' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path='*' element={<_404Page />} />
      </Routes>
    </Router>
  )
}

export default App
