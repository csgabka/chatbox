import React from 'react';
import firebase from '../../../firebase.js';
import './Chat.css';
import SingleMessage from './SingleMessage/SingleMessage';

const chat = (props) => {
  let chats = props.chats;
  let username = localStorage.getItem('localStoredName');
  return (
    <div className="ChatContainer">
      <ul className="Chats">
      {chats.map((chat, index) => {
        const postDate = new Date(chat.timestamp);
        return (
          <SingleMessage
          postDate={postDate}
          name={chat.username}
          message={chat.message}/>
        );
      })}
      </ul>
    </div>
  );
}

export default chat;
