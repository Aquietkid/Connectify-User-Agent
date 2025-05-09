import React, { useState } from 'react';
import api from '../axiosConfig';

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);

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
                // console.log(res.data);
            } catch (err) {
                // console.error(err);
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
                // console.log(res.data);
            } catch (err) {
                // console.error(err);
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-6">
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
                    {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
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
