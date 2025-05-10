import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            //console.log('Setting user in Redux - Full payload:', action.payload); // Debug log
            //console.log('User data being stored:', action.payload.data); // Debug log
            
            // Store just the data object from the response
            state.user = {
                name: action.payload.data.user.name,
                email: action.payload.data.user.email
            };
            state.accessToken = action.payload.data.token;
            state.isAuthenticated = true;
            state.loading = false;
            state.error = null;
            
            console.log('Updated Redux state:', state); // Debug log
        },
        setLoading: (state, action) => {
            //console.log('Setting loading state:', action.payload); // Debug log
            state.loading = action.payload;
        },
        setError: (state, action) => {
            console.log('Setting error state:', action.payload); // Debug log
            state.error = action.payload;
            state.loading = false;
        },
        logout: (state) => {
            console.log('Logging out - Clearing Redux state'); // Debug log
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
        }
    }
});

export const { setUser, setLoading, setError, logout } = userSlice.actions;
export default userSlice.reducer; 