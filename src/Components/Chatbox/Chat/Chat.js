import React from 'react';
import firebase from '../../../firebase.js';
import './Chat.css';
import SingleMessage from './SingleMessage/SingleMessage';

const chat = React.forwardRef((props, ref) => {
  let chats = props.chats;
  let username = localStorage.getItem('localStoredName');
  return (
    <div className="ChatContainer">
      <ul className="Chats" >
      {chats.map((chat, index) => {
        let sender = (username === chat.username) ? 'me' : username;
        const postDate = new Date(chat.timestamp);
        return (
          <SingleMessage
          sender={sender}
          postDate={postDate}
          name={chat.username}
          message={chat.message}/>
        );
      })}
      <div ref={ref}>
     </div>
      </ul>

    </div>
  );
})

export default chat;
