import React, { useContext, useRef, useState } from 'react';
import mediaIcon from '/src/assets/bottombar/media.svg';
import emojiIcon from '/src/assets/bottombar/emoji.svg';
import Audio from '../../icons/Audio';
import EmojiPicker from 'emoji-picker-react';
import Send from '../../icons/Send';
import { ChatAreaContext } from '../../context/ChatAreaContext';
import Emoji from '../../icons/Emoji';
import Media from '../../icons/Media';

const TextMessageSender = () => {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [text, setText] = useState('')
  const fileInputRef = useRef(null);
  const { showPreview, preview } = useContext(ChatAreaContext)

  function handleTextChange(text) {
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
        alert('Only image and video files are allowed.');
        return;
      }

      const blob = new Blob([file], { type });
      showPreview(mediaType, file);
    }
  }

  return (
    <div className="flex items-center gap-2 p-4 bg-white border-t">
      <button
        onClick={() => setEmojiPicker(!emojiPicker)}
        className="p-2 text-gray-500 hover:text-gray-700"
      >
        <Emoji />
      </button>
      
      <div className="flex-1">
        <textarea
          ref={fileInputRef}
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              // TODO: Implement send message logic
              setText('');
            }
          }}
          placeholder="Type a message..."
          className="w-full p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={1}
        />
      </div>

      <button
        onClick={() => {/* TODO: Implement media upload */}}
        className="p-2 text-gray-500 hover:text-gray-700"
      >
        <Media />
      </button>

      {text.trim() ? (
        <button
          onClick={() => {/* TODO: Implement send message logic */}}
          className="p-2 text-blue-500 hover:text-blue-700"
        >
          <Send />
        </button>
      ) : (
        <button
          onClick={() => {/* TODO: Implement voice message */}}
          className="p-2 text-gray-500 hover:text-gray-700"
        >
          <Audio />
        </button>
      )}

      {emojiPicker && (
        <div className="absolute bottom-20 left-4 bg-white border rounded-lg shadow-lg p-2">
          {/* TODO: Implement emoji picker */}
          <div className="grid grid-cols-8 gap-1">
            {['😊', '😂', '❤️', '👍', '🎉', '🙏', '👋', '🔥'].map(emoji => (
              <button
                key={emoji}
                onClick={() => handleEmojiPick(emoji)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextMessageSender;
