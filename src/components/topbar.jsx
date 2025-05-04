import React from 'react';
import avatarImage from './avatar.svg'; 
import searchIcon from './search.svg'; 
import infoIcon from './info.svg'; 
import './TopBar.css'; 

const TopBar = ({ contactName, isTyping }) => {
  return (
    <div className="top-bar">
      <div className="left-side">
        <img src={avatarImage} alt="Avatar" className="avatar" />
        <div className="contact-info">
          <span className="contact-name">{contactName}</span>
          {isTyping && <span className="typing-text">Typing...</span>}
        </div>
      </div>
      <div className="right-side">
        <div className="icon-placeholder">
          <img src={searchIcon} alt="Search" className="icon" />
        </div>
        <div className="icon-placeholder">
          <img src={infoIcon} alt="Info" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;