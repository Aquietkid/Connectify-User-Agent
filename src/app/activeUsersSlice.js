import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeUsers: [],
};

const activeUsersSlice = createSlice({
  name: 'activeUsers',
  initialState,
  reducers: {
    userJoined(state, action) {
      const userId = action.payload;
      if (!state.activeUsers.includes(userId)) {
        state.activeUsers.push(userId);
      }
    },
    userLeft(state, action) {
      const userId = action.payload;
      state.activeUsers = state.activeUsers.filter(user => user !== userId);
    },
    setActiveUsers(state, action) {
      const activeUsers = action.payload;
      state.activeUsers = activeUsers
    },
  },
});

export const { userJoined, userLeft, setActiveUsers } = activeUsersSlice.actions;
export default activeUsersSlice.reducer;
