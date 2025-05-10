import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

// Load initial state from localStorage if available
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error('Error loading state from localStorage:', err);
        return undefined;
    }
};

// Save state to localStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (err) {
        console.error('Error saving state to localStorage:', err);
    }
};

const store = configureStore({
    reducer: {
        user: userReducer
    },
    preloadedState: loadState(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

// Debug: Log initial state
console.log('Initial Redux Store State:', store.getState());

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
    const state = store.getState();
    console.log('Redux Store Updated:', state);
    saveState(state);
});

export default store; 