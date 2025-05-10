import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { api } from '../axiosConfig';
import { setUser, setLoading, setError } from '../store/userSlice';
import Message from './Message';

function Auth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useSelector(state => state.user);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Debug log for Redux state
    useEffect(() => {
        console.log('Current Redux State:', { isAuthenticated, user });
        console.log('User Name from Redux:', user?.name);
    }, [isAuthenticated, user]);

    // Clear form fields when switching between login and signup
    useEffect(() => {
        if (isLogin) {
            setName('');
            setProfilePicture(null);
        }
    }, [isLogin]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        setMessage({ type: '', text: '' });
        
        try {
            if (isLogin) {
                const res = await api.post('/user/signin', {
                    email,
                    password
                });
                
                console.log('Login API Response:', res.data); // Debug log
                
                if (res.data.success) {
                    dispatch(setUser(res.data));
                    console.log('Dispatched to Redux after login:', res.data); // Debug log
                    setMessage({ type: 'success', text: 'Login successful!' });
                    navigate('/');
                } else {
                    setMessage({ type: 'error', text: res.data.message });
                }
            } else {
                // Signup logic
                console.log('Attempting signup with:', { name, email, password }); // Debug log
                
                const res = await api.post('/user/signup', {
                    name,
                    email,
                    password
                });
                
                console.log('Signup API Response:', res.data); // Debug log
                
                if (res.data.success) {
                    if (profilePicture) {
                        const formData = new FormData();
                        formData.append('profilePicture', profilePicture);
                        
                        await api.post('/user/upload-profile-picture', formData, {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        });
                    }
                    
                    // Clear form fields
                    setName('');
                    setEmail('');
                    setPassword('');
                    setProfilePicture(null);
                    
                    // Show success message and switch to login
                    setMessage({ type: 'success', text: 'Account created successfully! Please login with your credentials.' });
                    setIsLogin(true);
                } else {
                    setMessage({ type: 'error', text: res.data.message });
                }
            }
        } catch (err) {
            console.error('Auth Error:', err); // Debug log
            const errorMessage = err.response?.data?.message || (isLogin ? 'Login failed' : 'Signup failed');
            setMessage({ type: 'error', text: errorMessage });
            dispatch(setError(errorMessage));
        } finally {
            dispatch(setLoading(false));
        }
    };

    // If user is authenticated, don't show the auth form
    if (isAuthenticated) {
        return null;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                {message.text && <Message type={message.type} message={message.text} />}
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                            />
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                        />
                    </div>
                    {!isLogin && (
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700" htmlFor="profilePicture">
                                Profile Picture
                            </label>
                            <input
                                type="file"
                                id="profilePicture"
                                accept="image/*"
                                onChange={(e) => setProfilePicture(e.target.files[0])}
                                className="mt-1 block w-full text-sm text-gray-500"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="mt-4 text-center">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-blue-500 hover:underline ml-1"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Auth;
