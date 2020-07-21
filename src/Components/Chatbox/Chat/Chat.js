import React, {Component} from 'react';
import firebase from '../../../firebase.js';
import './Chat.css';

class Chat extends Component {
  render() {
    let chats = this.props.chats;
    console.log(chats);
    return (
      <div className="ChatContainer">
        <ul>

        {chats.map((chat, index) => {
          const postDate = new Date(chat.timestamp);
          return (
            <li key={index}><span>{chat.username}</span> {postDate.getHours() + ':' + (postDate.getMinutes())}: {chat.message}</li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Chat;
