import React from 'react';
import mediaIcon from '/src/assets/bottombar/media.svg';
import emojiIcon from '/src/assets/bottombar/emoji.svg';
import microphoneIcon from '/src/assets/bottombar/microphone.svg';

const BottomBar = () => {
  return (
    <div className="flex justify-between items-center bg-white p-2.5">
      <div>
        <img src={mediaIcon} alt="Media" className="w-5 h-5 fill-gray-300" />
      </div>
      <div className="flex-1 px-2">
        <div className="flex items-center bg-gray-100 rounded-full px-2 py-1">
          <img src={emojiIcon} alt="Emoji" className="w-[15px] h-[15px] mr-1.5" />
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-transparent border-none outline-none text-sm"
          />
        </div>
      </div>
      <div>
        <img src={microphoneIcon} alt="Microphone" className="w-5 h-5 fill-gray-300" />
      </div>
    </div>
  );
};

export default BottomBar;
