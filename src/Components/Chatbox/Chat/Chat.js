import React, {Component} from 'react';
import firebase from '../../../firebase.js';
import './Chat.css';

class Chat extends Component {
  render() {
    let chats = this.props.chats;
    let username = localStorage.getItem('localStoredName');

    console.log(chats);
    return (
      <div className="ChatContainer">
        <ul>

        {chats.map((chat, index) => {
          const postDate = new Date(chat.timestamp);
          return (
            <li key={index} className="">

            //conditional rendering me instead of name
            <span>{postDate.getHours() + ':' + (postDate.getMinutes())}:</span>
            <span>{chat.message}</span>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default Chat;
