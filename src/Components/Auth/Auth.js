import React, { Component } from  'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Backdrop from '../Backdrop/Backdrop';
import './Auth.css';
import firebase from '../../firebase.js';


class Auth extends Component {
  constructor(){
    super();
    this.state = {
      username: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  changeHandler = (e) => {
    e.preventDefault();
    this.setState({username: e.target.value});
  };

  handleSubmit = (e) => {
    console.log(this.state.username);
    e.preventDefault();
    const username = this.state.username;
      this.props.history.push({
        pathname: '/chat',
        state: { username: username }
  });
}

  render() {

    let style = {
      fontSize: 30
    }
      return(
          <div className="Auth">
            <h1 style={style}>Chatbox</h1>
            <Backdrop>
              <h1>Login</h1>
              <Input placeholder="Type your name..."
               changeHandler={(e) => this.changeHandler(e)}/>
              <Button name="login"
              handleSubmit={(e) => this.handleSubmit(e)} />
            </Backdrop>
          </div>

    );
  }
}

export default Auth;
