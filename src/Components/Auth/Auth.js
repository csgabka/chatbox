import React, { Component } from  'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Backdrop from '../Backdrop/Backdrop';
import './Auth.css';
import Modal from '../../Components/Modal/Modal';
import firebase from '../../firebase.js';



class Auth extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      userKey: '',
      isValid: false,
      alreadyLoggedIn: false,
      timedOutSession: false
    }

    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authorization = this.authorization.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);


  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }



  changeHandler = (e) => {
    e.preventDefault();
    this.setState({username: e.target.value});
      };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.authorization(e);
    }
  }

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
      localStorage.setItem('localStoredName', username);
      userRef.push({username: username}).then(res => {
        localStorage.setItem('localStoredUserKey', res.getKey());
        this.props.history.push({
          pathname: '/chat'
        })
      });
    }
  }


    onFocusHandler = (e) => {
      this.setState({username: '', alreadyLoggedIn: false});
    }

    resetSession = (e) => {
      this.setState({timedOutSession: false})
    }

  render() {
    let style = {
      fontSize: 30
    }
    let modal = <Modal reset={(e) => this.resetSession(e)} timedOutSession={this.state.timedOutSession}/>;
    let alreadyLoggedIn = <p className="error">{this.state.username} has already logged in!</p>;
      return(
          <div className="Auth">
          {(this.state.timedOutSession) ? modal : null}
          <h1 style={style}>Chatbox</h1>
            <Backdrop className="Backdrop">
              <h1>Login</h1>
              <Input
              className="Input"
              onFocus={(e) => this.onFocusHandler(e)}
              placeholder="Type your name..."
              changeHandler={(e) => this.changeHandler(e)}
              onKeyPress={this.handleKeyPress}
              value={this.state.username}/>
               {(this.state.alreadyLoggedIn) ? alreadyLoggedIn : null}
              <Button name="login" className="Button"
              handleSubmit={(e) => this.authorization(e)} />
            </Backdrop>
          </div>

    );
  }
}

export default Auth;
