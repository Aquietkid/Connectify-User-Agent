import React, { useState, createContext, useEffect, useRef } from 'react';
import { getAllMessages, sendMessage as sendMessageApi } from '../api/message';
import { useSelector } from 'react-redux';
import socket from '../config/socket';

export const ChatAreaContext = createContext(undefined);

const ChatAreaProvider = ({ children }) => {
  const [preview, setPreview] = useState(false); // boolean | {type:"image"|"video", blob:Blob}
  const { chat } = useSelector(state => state.mainWindow);
  const user = useSelector(state => state.user);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimer = useRef(null)

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
      console.log(res)
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
      const newMessage = { ...res.data, sender: user }
      socket.emit("sendMessage", { chatId: chat._id, message: newMessage })
      setMessages(prev => ([...prev, newMessage]));
    }
  }

  function startedTyping() {
    socket.emit('typing', { chatId: chat._id, userId: user._id })
  }


  useEffect(() => {
    socket.emit("joinRoom", { chatId: chat._id, userId: user._id })

    socket.on('newMessage', (message) => {
      setMessages(prev => ([...prev, message]))
    })

    socket.on("userTyping", ({ userId }) => {
      if (chat.type === 'personal') {
        setIsTyping(true);
        
        if (typingTimer.current)
          clearTimeout(typingTimer.current)
        
        typingTimer.current = setTimeout(() => {
          setIsTyping(false);
          typingTimer.current = null;
        }, 2000);
      }
    });

    return () => {
      socket.off("newMessage");
      socket.off('userTyping')
    }

  }, [])

  const contextObject = {
    preview,
    showPreview,
    closePreview,
    fetchAllMessages,
    messages,
    sendMessage,
    isTyping,
    startedTyping
  };

  return (
    <ChatAreaContext.Provider value={contextObject}>
      {children}
    </ChatAreaContext.Provider>
  );
};

export default ChatAreaProvider;