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
    e.preventDefault();
    const username = this.state.username;
    if (username === '') {
      console.log('error');
    } else {
      let userRef = firebase.database().ref('online');
      userRef.push(username, () => {
        localStorage.setItem('usernameInLocalStorage', username);
        const localStoredName = localStorage.getItem('usernameInLocalStorage');
           this.props.history.push({
             pathname: '/chat' }
      )
      });
    }
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
