import './App.css'

import Auth from './components/Auth'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './components/Home'
import _404Page from './components/_404Page'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/signin' element={<Auth />} />
          <Route path='/signup' element={<Auth />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<_404Page />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;