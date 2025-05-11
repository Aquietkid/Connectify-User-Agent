import React, { useState } from 'react';
import searchIcon from '/src/assets/search-glass.svg';
import avatarImage from '/src/assets/topbar/avatarImage.svg';
import infoIcon from '/src/assets/topbar/info.svg';
import { useSelector } from 'react-redux';
import { PLACEHOLDER_AVATAR } from '../../utils/constants';

const TopBar = () => {
  const [isTyping, setIsTyping] = useState(true);
  const { chat } = useSelector(state => state.mainWindow)
  return (
    <div className="relative">
      {/* Border behind the top bar */}
      <div className="absolute bottom-0 left-0 right-0 h-5 border-l border-r border-[#eaeaea] z-0" />

      {/* Top bar */}
      <div className="flex justify-between items-center bg-white border border-[#eaeaea] rounded-[10px] p-2.5 h-20 relative z-10">
        <div className="flex items-center">
          <img src={chat.avatar || PLACEHOLDER_AVATAR} alt="Avatar" className="w-[50px] h-[50px] rounded-full mr-2.5" />
          <div className="flex flex-col">
            <span className="font-bold">{chat.name}</span>
            {isTyping && <span className="text-green-600 text-xs">Typing...</span>}
          </div>
        </div>
        <div className="flex">
          <div className="mr-2.5">
            <img src={searchIcon} alt="Search" className="w-5 h-5" />
          </div>
          <div>
            <img src={infoIcon} alt="Info" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
