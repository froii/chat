import React, {memo, useState} from 'react';
import debounce from "lodash.debounce";
import './style.css';


export const Controls = memo(({sendMessage, onTyping}) => {
  const [userTyping, toggleUserTyping] = useState('');
  const stopTyping = debounce(  () => {
    toggleUserTyping('');
  }, 2000);

  const submitForm = (e) => {
    e.preventDefault();
    const myMessage = e.target.text.value;
    if(myMessage) sendMessage(myMessage);
  };

  const typing = (e) => {
    stopTyping();
    onTyping((name)=> { name !== 'Me' && toggleUserTyping(name); });
  };

  return (
    <div>
      <span className='typing_info'> {userTyping && `${userTyping} is writing...` }</span>
      <form className="controls" onSubmit={submitForm}>
        <input name='text' placeholder="Say something" onKeyDown={typing}/>
        <button> Send </button>
      </form>
    </div>
  );
})

Controls.uiName = "Controls";
Controls.displayName = "Controls";
