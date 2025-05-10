import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainWindow from './components/MainWindow'
import NavSidebar from './components/NavSidebar'
import ProfilePage from './pages/ProfilePage.jsx'
import Auth from './components/Auth'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={
          <>
            <div className='flex flex-row'>
              <NavSidebar />
              <Routes>
                <Route path="/" element={<MainWindow />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/auth" element={<Auth />} />
              </Routes>
            </div>
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App;