import React from 'react';

function Message({ type, message }) {
    if (!message) return null;

    const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
    const textColor = type === 'success' ? 'text-green-700' : 'text-red-700';
    const borderColor = type === 'success' ? 'border-green-400' : 'border-red-400';

    return (
        <div className={`${bgColor} border ${borderColor} text-${textColor} px-4 py-3 rounded relative mb-4`} role="alert">
            <span className="block sm:inline">{message}</span>
        </div>
    );
}

export default Message; 