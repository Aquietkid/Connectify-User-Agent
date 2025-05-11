import React, { useState, createContext } from 'react';
import { getAllMessages, sendMessage as sendMessageApi } from '../api/message';
import { useSelector } from 'react-redux';

export const ChatAreaContext = createContext(undefined);

const ChatAreaProvider = ({ children }) => {
  const [preview, setPreview] = useState(false); // boolean | {type:"image"|"video", blob:Blob}
  const { chat } = useSelector(state => state.mainWindow);
  const [messages, setMessages] = useState([]);

  function showPreview(type, blob) {
    setPreview({
      type,
      blob
    })
  }

  function closePreview() {
    setPreview(false)
  }


  async function fetchAllMessages() {
    const res = await getAllMessages(chat._id);
    if (res) {
      setMessages(res.data)
    }
  }

  async function sendMessage({ text, type, blob }) {
    setPreview(false)

    const formData = new FormData();
    formData.append('chatId', chat._id);
    formData.append('text', type == 'audio' ? 'audio-dummy' : text);
    formData.append('type', type);
    if ((blob || preview.blob) && type != 'text') {
      if (type == 'audio') {
        formData.append('attachment', blob);
      } else {
        formData.append('attachment', preview.blob);
      }
    }
    // formData.append('repliedTo', undefined); // disabled for now

    const res = await sendMessageApi(formData)
    if (res) {
      setMessages([...messages, res.data]); // optimal
    }
  }

  const contextObject = {
    preview,
    showPreview,
    closePreview,
    fetchAllMessages,
    messages,
    sendMessage
  };

  return (
    <ChatAreaContext.Provider value={contextObject}>
      {children}
    </ChatAreaContext.Provider>
  );
};

export default ChatAreaProvider;