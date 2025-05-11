import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PLACEHOLDER_AVATAR } from '../../utils/constants';
import { GoInfo } from "react-icons/go";
import { ChatAreaContext } from '../../context/ChatAreaContext';
import { openPersonalInfo } from '../../app/mainWindowSlice';

const TopBar = () => {
  const { isTyping } = useContext(ChatAreaContext);
  const { chat } = useSelector(state => state.mainWindow)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const { activeUsers } = useSelector(state => state.activeUsers)
  const chatMembers = chat.members; // only if there is group

  const subText = (() => {
    if (chat.type == 'group') {
      return chatMembers.map(item => item._id != user._id ? item.name : '')
    }
  })()

  function checkOnline() {
    if (chat.type == 'personal') {
      // chat.userId will only be there if personal chat
      if (activeUsers.includes(chat.userId)) {
        return true;
      }
    }
    return false
  }

  function handleInfoClick() {
    if (chat.type == 'personal') {
      dispatch(openPersonalInfo(chat.userId))
    } else {

    }
  }

  return (
    <div className="relative">
      {/* Border behind the top bar */}
      <div className="absolute bottom-0 left-0 right-0 h-5 border-l border-r border-[#eaeaea] z-0" />

      {/* Top bar */}
      <div className="flex justify-between items-center bg-white border border-[#eaeaea] rounded-[10px] p-2.5 h-20 relative z-10">
        <div className="flex items-center">
          <div className='relative'>
            <img src={chat.avatar || PLACEHOLDER_AVATAR} alt="Avatar" className="w-[50px] h-[50px] rounded-full mr-2.5" />
            {checkOnline() && <div className='bg-green-600 rounded-full w-2 aspect-square border border-white absolute left-1 bottom-1' />}
          </div>
          <div className="flex flex-col">
            <span className="font-bold">{chat.name}</span>
            {isTyping && <span className="text-green-600 text-xs">Typing...</span>}
            {subText && <span className="text-placeholder text-xs">{subText.toString()}</span>}
          </div>
        </div>
        <div className="flex mr-5">
          <button onClick={handleInfoClick}>
            <GoInfo size={30} color='#bebebe' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
