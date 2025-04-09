import React from 'react';
import mediaIcon from './media.svg'; 
import emojiIcon from './emoji.svg'; 
import microphoneIcon from './microphone.svg'; 
import './BottomBar.css'; 

const BottomBar = () => {
  return (
    <div className="bottom-bar">
      <div className="left-side">
        <img src={mediaIcon} alt="Media" className="icon" />
      </div>
      <div className="center">
        <div className="input-wrapper">
          <img src={emojiIcon} alt="Emoji" className="emoji-icon" />
          <input type="text" placeholder="Type a message" className="input-field" />
        </div>
      </div>
      <div className="right-side">
        <img src={microphoneIcon} alt="Microphone" className="icon" />
      </div>
    </div>
  );
};

export default BottomBar;