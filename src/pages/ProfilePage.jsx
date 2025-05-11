import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProfileComponent from '../components/ProfileComponent';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { logout } from '../store/userSlice';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user, accessToken } = useSelector(state => state.user);
    const [meData, setMeData] = useState(null);
    const [error, setError] = useState(null);

    // Debug log for Redux state in Profile
    useEffect(() => {
        console.log('Current Redux State:', { isAuthenticated, user, accessToken });
        console.log('User Name from Redux:', user?.name);
        console.log('Access Token from Redux:', accessToken);
    }, [isAuthenticated, user, accessToken]);

    // Make API request to protected endpoint
    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                // Create a separate axios instance for Postman API
                const postmanApi = axios.create({
                    baseURL: 'https://api.getpostman.com',
                    headers: {
                        'X-Api-Key': 'PMAK-65c0c0c0c0c0c0c0c0c0c0c0-1234567890abcdef1234567890abcdef1234',
                        'Accept': 'application/json'
                    }
                });

                const response = await postmanApi.get('/me');
                console.log('Postman /me API Response:', response.data);
                setMeData(response.data);
                setError(null);
            } catch (error) {
                console.error('Error fetching /me data:', error.response?.data || error.message);
                setError(error.response?.data || error.message);
                setMeData(null);
            }
        };

        if (accessToken) {
            fetchProtectedData();
        }
    }, [accessToken]);

    const handleLogout = () => {
        // Clear Redux state
        dispatch(logout());
        // Clear localStorage (handled by store subscription)
        // Navigate to login page
        navigate('/auth');
    };

    return (
        <div className="flex h-screen">
            <div className="w-96 overflow-x-auto">
                <Sidebar />
            </div>
            <div className="flex-1 overflow-x-auto">
                <div className="p-4">
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200 flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v3a1 1 0 102 0V9z" clipRule="evenodd" />
                        </svg>
                        Logout
                    </button>
                </div>

                {/* Display Postman /me API Response */}
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Postman /me API Response</h2>
                    {error ? (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                            <p className="font-bold">Error:</p>
                            <pre className="mt-2">{JSON.stringify(error, null, 2)}</pre>
                        </div>
                    ) : meData ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                            <pre className="whitespace-pre-wrap">{JSON.stringify(meData, null, 2)}</pre>
                        </div>
                    ) : (
                        <div className="bg-gray-100 border border-gray-400 text-gray-700 px-4 py-3 rounded">
                            Loading...
                        </div>
                    )}
                </div>

                <ProfileComponent isFriend={true} />
            </div>
        </div>
    );
};

export default ProfilePage;
