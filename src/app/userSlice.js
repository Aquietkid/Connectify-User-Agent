import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  _id: '',
  name: '',
  email: '',
  profilePicture: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const data = action.payload
      state._id = data._id || ''
      state.name = data.name || ''
      state.email = data.email || ''
      state.profilePicture = data.profilePicture || ''
    },
    clearUser(state) {
      state._id = ''
      state.name = ''
      state.email = ''
      state.profilePicture = ''
    }
  }
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
