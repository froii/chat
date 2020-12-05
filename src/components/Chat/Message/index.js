import React, {useEffect, useState} from 'react';
import './style.css';

export const Message = ({getMessage}) => {
  const [messages, addMessage] = useState([]);

  useEffect(() => {
    getMessage((newMessage) => {
      addMessage(arr => [...arr, newMessage]);
    });
  }, []);

  return (
    <ul>
      {messages.map(({content, user, timestamp, id}) => {
        const date = new Date(timestamp)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const sentDate = `${hours}:${minutes}`

        const randomColor = () => Math.floor(Math.random() * 255)
        const color = `rgba(${randomColor()},${randomColor()},${randomColor()}) `

        return (
          <li className='message_wrapper' key={id}>
            <div className={user === 'Me' ? 'message self' : 'message'}>
              <p className='message__user' style={{color}}>{user}</p>
              <p> {content} </p>
              <span className='message__date'> {sentDate}  </span>
            </div>
          </li>
        )
      })}
        </ul>
        );
      };


Message.uiName = "Message";
Message.displayName = "Message";
