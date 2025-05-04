import React from 'react';
import searchIcon from '/src/assets/search-glass.svg'; 
import avatarImage from '/src/assets/topbar/avatarImage.svg'; 
import infoIcon from '/src/assets/topbar/info.svg'; 
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