import React, {Component} from 'react';
import firebase from '../../../firebase.js';

class Chat extends Component {
  render() {
    let chats = this.props.chats;
    return (
      <div>
        <ul>
        {chats.map((chat, index) => {
          const postDate = new Date(chat.timestamp);
          return (
            <li key={index}>{chat.username} {postDate.getHours() + ':' + (postDate.getMinutes())}: {chat.message}</li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Chat;
