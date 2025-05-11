import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
