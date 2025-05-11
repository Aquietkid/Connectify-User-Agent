import { configureStore } from '@reduxjs/toolkit'
// import chatCardsReducer from './chatCardsSlice'
import userReducer from '../store/userSlice'

export const store = configureStore({
  reducer: {
    // chatCards: chatCardsReducer
    user: userReducer,
  }
})
