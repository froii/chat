import React, { useEffect } from 'react';
import './style.css';

export const Message = ({getMessage}) => {
  useEffect(()=>{
    getMessage((v)=> {console.log(v);});
  }, []);

  return (
    <div>
      <ul>
        <li className='message'>
          sss
        </li>
      </ul>
    </div>
  );
}

Message.uiName = "Message";
Message.displayName = "Message";
