import React from 'react';

const VoiceMessage = ({ message }) => {
  const { from, content, time, senderName, avatar } = message;

  return (
    <div className={`message ${from === 'me' ? 'me' : 'other'}`}>
      {from === 'other' && <img src={avatar} alt={senderName} className="avatar" />}
      <div className="voice-message">
        <div className="play-pause-icon">▶️</div> {/* Placeholder for play/pause icon */}
        <div className="duration">{content}</div> {/* Display duration of the voice message */}
      </div>
      <div className="message-time">{time}</div>
    </div>
  );
};

export default VoiceMessage;