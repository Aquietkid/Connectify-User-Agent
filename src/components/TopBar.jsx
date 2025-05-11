import React from 'react';
import Search from '../icons/Search';
import Info from '../icons/Info';
import Avatar from '../icons/Avatar';

const TopBar = ({ contactName, isTyping }) => {
  return (
    <div className="relative">
      {/* Border behind the top bar */}
      <div className="absolute bottom-0 left-0 right-0 h-5 border-l border-r border-[#eaeaea] z-0" />

      {/* Top bar */}
      <div className="flex justify-between items-center bg-white border border-[#eaeaea] rounded-[10px] p-2.5 h-20 relative z-10">
        <div className="flex items-center">
          <Avatar className="w-[50px] h-[50px] rounded-full mr-2.5" />
          <div className="flex flex-col">
            <span className="font-bold">{contactName}</span>
            {isTyping && <span className="text-green-600">Typing...</span>}
          </div>
        </div>
        <div className="flex">
          <div className="mr-2.5">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <Info className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar; 