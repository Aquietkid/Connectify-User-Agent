import React, { useState, useEffect } from 'react';
import api from '../axiosConfig';
import { setUser } from '../app/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

function Auth() {
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
        if (isLogin) {
            try {
                const res = await api.post('/user/signin', {
                    email: email,
                    password
                }, {
                    withCredentials: true
                });

                const myUser = res.data.data.user;
                localStorage.setItem("token", res.data.data.token)
                if (myUser) {
                    dispatch(setUser(myUser));
                    navigate('/');
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
                    navigate('/signin');
                }, 3000);
                setTimerId(id);
            } catch (err) {
                console.error(err);
            }
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
        <div className="flex items-center justify-center min-h-screen bg-white">
            {showPopup && (
                <div className="fixed top-5 right-5 bg-black text-white p-4 rounded shadow-lg z-50">
                    <p>Sign-up successful! Redirecting to login...</p>
                    <button onClick={skipRedirect} className="mt-2 underline">Go now</button>
                </div>
            )}
            <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-200">
                <h2 className="text-2xl font-bold text-center mb-6 text-black">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
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
                                className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black text-black"
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
                            className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black text-black"
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
                            className="mt-1 block w-full p-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black text-black"
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
                                className="mt-1 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 transition duration-200 font-medium"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-700">
                    {isLogin ? `Don't have an account?` : 'Already have an account?'}
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            isLogin ? navigate('/signup') : navigate('/signin');
                        }}
                        className="text-black hover:underline ml-1 font-medium"
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Auth;