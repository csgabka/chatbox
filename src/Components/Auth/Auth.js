import React, { Component } from  'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Backdrop from '../Backdrop/Backdrop';

import './Auth.css';


class Auth extends Component {

  render() {
    let style = {
      fontSize: 30
    }
      return(
      <div className="Auth">
      <h1 style={style}>Chatbox</h1>
      <Backdrop>
        <h1>Login</h1>
        <Input placeholder="Type your name..."/>
        <Button name="login" />
      </Backdrop>
      </div>
    );
  }
}

export default Auth;
