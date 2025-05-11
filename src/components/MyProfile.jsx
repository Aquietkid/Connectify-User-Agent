import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function MyProfile() {
    const { user } = useSelector(state => state.user);
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: '',
        about: '',
        profilePicture: '',
        friends: []
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            // TODO: Replace with actual API endpoint
            // For now using dummy data
            setProfileData({
                name: user?.name || 'John Doe',
                about: 'Software Developer | Tech Enthusiast | Coffee Lover',
                profilePicture: 'https://i.pravatar.cc/150?img=1',
                friends: [
                    {
                        id: 1,
                        name: 'Jane Smith',
                        profilePicture: 'https://i.pravatar.cc/150?img=5'
                    },
                    {
                        id: 2,
                        name: 'Mike Johnson',
                        profilePicture: 'https://i.pravatar.cc/150?img=8'
                    },
                    {
                        id: 3,
                        name: 'Sarah Wilson',
                        profilePicture: 'https://i.pravatar.cc/150?img=9'
                    }
                ]
            });
            setLoading(false);
        } catch (error) {
            console.error('Error fetching profile data:', error);
            setLoading(false);
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            // TODO: Replace with actual API endpoint
            // For now just updating local state
            setProfileData(prev => ({
                ...prev,
                name: document.getElementById('name').value,
                about: document.getElementById('about').value
            }));
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    const handleProfilePictureChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            // TODO: Implement actual file upload
            // For now just using a dummy URL
            setProfileData(prev => ({
                ...prev,
                profilePicture: URL.createObjectURL(file)
            }));
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header */}
                <div className="flex items-start space-x-6 mb-8">
                    <div className="relative">
                        <img
                            src={profileData.profilePicture}
                            alt={profileData.name}
                            className="w-32 h-32 rounded-full border border-gray-200"
                        />
                        {isEditing && (
                            <label className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer">
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={handleProfilePictureChange}
                                />
                                Edit
                            </label>
                        )}
                    </div>
                    <div className="flex-1">
                        {isEditing ? (
                            <div className="space-y-4">
                                <input
                                    id="name"
                                    type="text"
                                    defaultValue={profileData.name}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                                <textarea
                                    id="about"
                                    defaultValue={profileData.about}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    rows="3"
                                />
                            </div>
                        ) : (
                            <div>
                                <h1 className="text-2xl font-bold text-black mb-2">{profileData.name}</h1>
                                <p className="text-gray-600">{profileData.about}</p>
                            </div>
                        )}
                        <div className="mt-4">
                            {isEditing ? (
                                <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                                >
                                    Save Changes
                                </button>
                            ) : (
                                <button
                                    onClick={handleEdit}
                                    className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors border border-gray-300"
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Friends Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-black mb-4">Friends</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {profileData.friends.map((friend) => (
                            <div
                                key={friend.id}
                                className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 border border-gray-200"
                            >
                                <img
                                    src={friend.profilePicture}
                                    alt={friend.name}
                                    className="w-12 h-12 rounded-full border border-gray-200"
                                />
                                <div>
                                    <h3 className="font-semibold text-black">{friend.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile; 