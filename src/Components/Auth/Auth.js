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
      username: '',
      isValid: false,
      alreadyLoggedIn: false
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authorization = this.authorization.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }


  changeHandler = (e) => {
    e.preventDefault();
    this.setState({username: e.target.value});
  };

  authorization = (e) => {
    e.preventDefault();
    let username = this.state.username;
    let userRef = firebase.database().ref('users');
    userRef.orderByChild("username").equalTo(username).once("value",snapshot => {
    if (snapshot.exists()){
      this.setState({alreadyLoggedIn: true});
    }
    else {
      this.setState({isValid: true}, this.handleSubmit);
    }
  })
  }

  handleSubmit = () => {
    const { username, isValid }  = this.state;
    let userRef = firebase.database().ref('users');
    if (isValid) {
        userRef.push().set({
          username: username
        });
        localStorage.setItem('localStoredName', username);
           this.props.history.push({
                  pathname: '/chat' }
           )
        }
    }

    onFocusHandler = (e) => {
      this.setState({username: '', alreadyLoggedIn: false});
    }

  render() {

    let style = {
      fontSize: 30
    }

    let alreadyLoggedIn = <p className="error">{this.state.username} has already logged in!</p>;
      return(
          <div className="Auth">
            <h1 style={style}>Chatbox</h1>
            <Backdrop>
              <h1>Login</h1>
              <Input
              onFocus={(e) => this.onFocusHandler(e)}
              placeholder="Type your name..."
              changeHandler={(e) => this.changeHandler(e)}
              value={this.state.username}/>
               {(this.state.alreadyLoggedIn) ? alreadyLoggedIn : null}
              <Button name="login"
              handleSubmit={(e) => this.authorization(e)} />
            </Backdrop>
          </div>

    );
  }
}

export default Auth;
