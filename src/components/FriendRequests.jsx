import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function FriendRequests() {
    const [requests, setRequests] = useState([]);
    const { user } = useSelector(state => state.user);

    // Dummy data for friend requests
    const dummyRequests = [
        {
            id: 1,
            sender: {
                name: "John Doe",
                email: "john@example.com",
                profilePicture: "https://i.pravatar.cc/150?img=1"
            }
        },
        {
            id: 2,
            sender: {
                name: "Jane Smith",
                email: "jane@example.com",
                profilePicture: "https://i.pravatar.cc/150?img=5"
            }
        },
        {
            id: 3,
            sender: {
                name: "Mike Johnson",
                email: "mike@example.com",
                profilePicture: "https://i.pravatar.cc/150?img=8"
            }
        },
        {
            id: 4,
            sender: {
                name: "Sarah Wilson",
                email: "sarah@example.com",
                profilePicture: "https://i.pravatar.cc/150?img=9"
            }
        }
    ];

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => {
            setRequests(dummyRequests);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleAccept = (requestId) => {
        // Simulate API call delay
        setTimeout(() => {
            setRequests(requests.filter(request => request.id !== requestId));
        }, 500);
    };

    const handleReject = (requestId) => {
        // Simulate API call delay
        setTimeout(() => {
            setRequests(requests.filter(request => request.id !== requestId));
        }, 500);
    };

    return (
        <div className="p-6 bg-white">
            <h1 className="text-2xl font-bold mb-6 text-black">Friend Requests</h1>
            {requests.length === 0 ? (
                <div className="text-center text-gray-600">
                    No pending friend requests
                </div>
            ) : (
                <div className="space-y-4">
                    {requests.map((request) => (
                        <div
                            key={request.id}
                            className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between border border-gray-200"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={request.sender.profilePicture}
                                    alt={request.sender.name}
                                    className="w-12 h-12 rounded-full border border-gray-200"
                                />
                                <div>
                                    <h3 className="font-semibold text-black">{request.sender.name}</h3>
                                    <p className="text-sm text-gray-600">{request.sender.email}</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => handleAccept(request.id)}
                                    className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors border border-gray-300"
                                >
                                    Accept
                                </button>
                                <button
                                    onClick={() => handleReject(request.id)}
                                    className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-100 transition-colors border border-gray-300"
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FriendRequests; 