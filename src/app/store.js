import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import mainWindowReducer from './mainWindowSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    mainWindow: mainWindowReducer
  }
})
