import React, { useState } from 'react';
import VoiceMessageSender from './VoiceMessageSender';
import TextMessageSender from './TextMessageSender';

const MessageSender = () => {
  const [isRecording, setIsRecording] = useState(false)

  function startRecording() {
    setIsRecording(true);
  }

  function stopRecording() {
    setIsRecording(false);
  }

  return !isRecording ? <TextMessageSender startRecording={startRecording} /> : <VoiceMessageSender stopRecording={stopRecording} />
};

export default MessageSender;
