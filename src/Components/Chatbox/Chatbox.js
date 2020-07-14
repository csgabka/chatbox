import React, {Component} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Chat from './Chat/Chat';
import firebase from '../../firebase.js';

class Chatbox extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
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
      <Chat />

        <Input changeHandler={(e) => this.changeHandler(e)}/>
        <Button handleSubmit={(e) => {this.handleSubmit(e)}}
        name="send"/>
      </div>
    );
  }
}

export default Chatbox;
