import React from 'react';
import { Controls} from "./Controls";
import { Message} from "./Message";
import './style.css';

const onMessage = window ? window.Chat.onMessage : ()=>{};
const sendMessage = window ? window.Chat.sendMessage : ()=>{};
const onTyping = window ? window.Chat.onTyping : ()=>{};

export const Chat = () => {
  return (
    <div className='chat_container'>
      <Message getMessage={onMessage}/>
      <Controls sendMessage={sendMessage} onTyping={onTyping}/>
    </div>
  );
}

Chat.uiName = "Chat";
Chat.displayName = "Chat";
