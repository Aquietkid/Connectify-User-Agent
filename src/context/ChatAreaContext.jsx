import React, { useState, createContext } from 'react';

export const ChatAreaContext = createContext(undefined);

const ChatAreaProvider = ({ children }) => {
  const [preview, setPreview] = useState(false); // boolean | {type:"image"|"video", blob:Blob}


  function showPreview(type, blob) {
    setPreview({
      type,
      blob
    })
  }

  function closePreview(){
    setPreview(false)
  }

  const contextObject = {
    preview,
    showPreview,
    closePreview
  };

  return (
    <ChatAreaContext.Provider value={contextObject}>
      {children}
    </ChatAreaContext.Provider>
  );
};

export default ChatAreaProvider;