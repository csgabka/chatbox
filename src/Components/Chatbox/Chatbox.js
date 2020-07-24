import React, {Component} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Chat from './Chat/Chat';
import firebase from '../../firebase.js';
import "./Chatbox.css";

class Chatbox extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      chats: []
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    const chatRef = firebase.database().ref('chat');
    chatRef.on('value', snapshot => {
      const getChats = snapshot.val();
      let ascChats = [];
      for(let chat in getChats){
        ascChats.push({
          message: getChats[chat].message,
          username: getChats[chat].username,
          timestamp: getChats[chat].timestamp
        });
      }
      this.setState({chats: ascChats});
  });
}

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({message: e.target.value});
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  handleSubmit = (e) => {
    let username = localStorage.getItem('localStoredName');
    e.preventDefault();
    const chat = {
      message: this.state.message,
      username: username,
      timestamp: new Date().getTime()
    }
    let userRef = firebase.database().ref('chat');
    userRef.push(chat);
    this.setState({message: ''});
  }

  render() {
    return (
      <div className="Chatbox">
      <Chat chats={this.state.chats}/>
        <Input className="Input MsgInput"
        changeHandler={(e) => this.changeHandler(e)}
        onKeyPress={this.handleKeyPress}
        value={this.state.message}/>
        <Button
        className="Button Send"
        handleSubmit={(e) => {this.handleSubmit(e)}}
        name="send"
        onKeyPress={this.handleKeyPress}/>
      </div>
    );
  }
}

export default Chatbox;
