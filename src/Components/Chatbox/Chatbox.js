import React, {Component} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Chat from './Chat/Chat';
import firebase from '../../firebase.js';

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

  logoutUser = (e) => {
    e.preventDefault();
    //TO DO!
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const chat = {
      message: this.state.message,
      username: this.props.username,
      timestamp: new Date().getTime()
    }
    let userRef = firebase.database().ref('chat');
    userRef.push(chat);
  }

  render() {
    return (
      <div>
      <Button
      name="logout"
      handleSubmit={this.logoutUser} />
      <Chat chats={this.state.chats}/>
        <Input changeHandler={(e) => this.changeHandler(e)}/>
        <Button handleSubmit={(e) => {this.handleSubmit(e)}}
        name="send"/>
      </div>
    );
  }
}

export default Chatbox;
