import React, { useContext, useRef, useState } from 'react';
import mediaIcon from '/src/assets/bottombar/media.svg';
import emojiIcon from '/src/assets/bottombar/emoji.svg';
import Audio from '../../icons/Audio';
import EmojiPicker from 'emoji-picker-react';
import Send from '../../icons/Send';
import { ChatAreaContext } from '../../context/ChatAreaContext';
import toast from 'react-hot-toast';

const TextMessageSender = ({ startRecording }) => {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [text, setText] = useState('')
  const fileInputRef = useRef(null);
  const { showPreview, preview, sendMessage, startedTyping } = useContext(ChatAreaContext)

  function handleTextChange(text) {
    startedTyping()
    setText(text)
  }

  function handleEmojiPick(emoji) {
    setText(prev => prev + emoji)
    setEmojiPicker(false)
  }

  function handleFileSelect(e) {
    const file = e.target.files?.[0];
    if (file) {
      const type = file.type;
      let mediaType = '';

      if (type.startsWith('image/')) {
        mediaType = 'image';
      } else if (type.startsWith('video/')) {
        mediaType = 'video';
      } else {
        toast.error('Only image and video files are allowed.');
        return;
      }
      showPreview(mediaType, file);
    }
  }

  function handleSend(e) {
    e.preventDefault();
    const type = !preview ? "text" : preview.type
    if ((text && type == 'text') || type != 'text') {
      sendMessage({
        text,
        type
      })
      setText('')
    }
  }

  return (
    <form onSubmit={handleSend} className="flex justify-between items-center bg-white mt-2">
      {!preview && <div
        onClick={() => fileInputRef.current.click()}
      >
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*,video/*"
          ref={fileInputRef}
          className='hidden'
          onChange={handleFileSelect}
        />
        <img
          src={mediaIcon}
          alt="Media"
          className="w-10 aspect-square fill-gray-300 cursor-pointer"
        />
      </div>}
      <div className="flex-1 px-2 gap-10">
        <div className="flex items-center bg-gray-100 rounded-md p-2 relative">
          <div className='absolute bottom-0 z-10'>
            <EmojiPicker
              open={emojiPicker}
              onEmojiClick={(e) => handleEmojiPick(e.emoji)}
            />
          </div>
          <img onClick={() => setEmojiPicker(prev => !prev)} src={emojiIcon} alt="Emoji" className="w-10 aspect-square cursor-pointer" />
          <input
            type="text"
            placeholder="Type a message"
            value={text}
            onChange={(e) => handleTextChange(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm"
          />
        </div>
      </div>
      <div className='flex justify-center items-center cursor-pointer'>
        {(text.length == 0 && !preview) ?
          <button onClick={startRecording}>
            <Audio borderColor='#fff' color='#000' height={50} width={50} />
          </button>
          :
          <button type='submit'>
            <Send color='#000' height={50} width={50} />
          </button>
        }
      </div>
    </form>
  );
};

export default TextMessageSender;