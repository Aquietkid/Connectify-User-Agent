import React, { useState } from 'react';
import TextMessage from './TextMessage';
import VoiceMessage from './VoiceMessage';
import PhotoMessage from './PhotoMessage';

export const ChatBox = () => {
  const [messages, setMessages] = useState([
    
    {
      id: 1,
      type: 'text',
      from: 'other',
      content: 'Hello! How are you?',
      time: '10:00 AM'
    },
    {
      id: 2,
      type: 'text',
      from: 'me',
      content: 'Hi! I am doing well. Thanks!',
      time: '10:05 AM'
    },
    
  ]);

  return (
    <div className="chat-box">
      {messages.map(message => {
        if (message.type === 'text') {
          return <TextMessage key={message.id} message={message} />;
        } else if (message.type === 'voice') {
          return <VoiceMessage key={message.id} message={message} />;
        } else if (message.type === 'photo') {
          return <PhotoMessage key={message.id} message={message} />;
        }
        return null;
      })}
    </div>
  );
};
