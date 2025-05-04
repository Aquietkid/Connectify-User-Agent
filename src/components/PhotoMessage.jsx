import React from 'react';

const PhotoMessage = ({ message }) => {
  const { from, content, time, caption, senderName, avatar } = message;

  return (
    <div className={`message ${from === 'me' ? 'me' : 'other'}`}>
      {from === 'other' && <img src={avatar} alt={senderName} className="avatar" />}
      <div className="photo-message">
        <img src={content} alt="Photo" className="photo" />
        {caption && <div className="caption">{caption}</div>}
      </div>
      <div className="message-time">{time}</div>
    </div>
  );
};

export default PhotoMessage;