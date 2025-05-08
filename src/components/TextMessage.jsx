import React from 'react';

const TextMessage = ({ message }) => {
  const { from, content, time, senderName, avatar } = message;

  return (
    <div className={`message ${from === 'me' ? 'me' : 'other'}`}>
      {from === 'other' && <img src={avatar} alt={senderName} className="avatar" />}
      <div className="text-content">{content}</div>
      <div className="message-time">{time}</div>
    </div>
  );
};

export default TextMessage;