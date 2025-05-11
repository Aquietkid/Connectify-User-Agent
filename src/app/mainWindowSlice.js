import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: 'default', // default | chatArea | personalInfo | groupInfo
  userId: null, // for personalInfo
  chat: null, // for chatArea
  groupId: null // for groupInfo
}

const mainWindowSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openPersonalInfo(state, action) {
      state.type = "personalInfo"
      state.userId = action.payload
    },
    openGroupInfo(state, action) {
      state.type = "groupInfo"
      state.groupId = action.payload
    },
    openChat(state, action) {
      state.type = "chatArea"
      state.chat = action.payload // chat object with id avatar and name
    },
  }
})

export const { openChat, openGroupInfo, openPersonalInfo } = mainWindowSlice.actions
export default mainWindowSlice.reducer
