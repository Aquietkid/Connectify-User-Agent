import React, { useState, useEffect } from 'react';
import api from '../axiosConfig';
import { setUser } from '../app/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Auth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useSelector(state => state.user);
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

    const [showPopup, setShowPopup] = useState(false);
    const [timerId, setTimerId] = useState(null);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

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

                const myUser = res.data.data.user;
                if (myUser) {
                    dispatch(setUser(myUser));
                    navigate('/home');
                }
            } catch (err) {
                console.error(err);
            }
        } else {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            if (profilePicture) {
                formData.append('profilePicture', profilePicture);
            }

            try {
                const res = await api.post('/user/signup', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                console.log(res.data);
                setShowPopup(true);
                const id = setTimeout(() => {
                    navigate('/login');
                }, 3000);
                setTimerId(id);
            } catch (err) {
                console.error(err);
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

    const skipRedirect = () => {
        if (timerId) clearTimeout(timerId);
        navigate('/signin');
    };

    useEffect(() => {
        setIsLogin(location.pathname === '/signin');
    }, [location.pathname]);


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            {showPopup && (
                <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded shadow-lg z-50">
                    <p>Sign-up successful! Redirecting to login...</p>
                    <button onClick={skipRedirect} className="mt-2 underline">Go now</button>
                </div>
            )}
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
                        onClick={() => {
                            setIsLogin(!isLogin);
                            isLogin ? navigate('/signup') : navigate('/signin');
                        }
                        }
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
