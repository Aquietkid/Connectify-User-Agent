import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import mainWindowReducer from './mainWindowSlice'
import activeUsersReducer from './activeUsersSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    mainWindow: mainWindowReducer,
    activeUsers: activeUsersReducer
  }
})
