import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
// import {randomColor} from 'src/utils/helpers';
import {randomColor} from '../../../utils/helpers';
import './style.css';


export const Message = ({getMessage}) => {
  const [messages, addMessage] = useState([]);
  const usersColor = {};
  let previousUser = '';

  useEffect(() => {
    getMessage((newMessage) => {
      addMessage(arr => [...arr, newMessage]);
    });
  }, []);

  return (
    <ul>
      {messages.map(({content, user, timestamp, id}) => {
          if (!usersColor[user]) {
            usersColor[user] = `rgba(${randomColor()},${randomColor()},${randomColor()})`
          }

          const messageClass = classNames({
            'with-arrow': previousUser !== user,
            self: user === 'Me',
            message: true
          })

          const date = new Date(timestamp)
          const sentDate = `${date.getHours()}:${date.getMinutes()}`

          previousUser = user
          return (
            <li className='message_wrapper' key={id}>
              <div className={messageClass}>
                {
                  user !== 'Me' &&
                  <p className='message__user' style={{color: usersColor[user]}}>
                    {user}
                  </p>
                }
                <p> {content} </p>
                <span className='message__date'> {sentDate}  </span>
              </div>
            </li>
          )
        }
      )}
    </ul>
  );
};


Message.uiName = "Message";
Message.displayName = "Message";
