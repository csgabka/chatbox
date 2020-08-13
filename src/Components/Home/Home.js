import React, { Component } from  'react';
import Chatbox from '../Chatbox/Chatbox';
import UserList from '../UserList/UserList';
import Button from '../Button/Button';
import firebase from '../../firebase.js';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

     this.events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress"
    ];
    for (var i in this.events) {
          window.addEventListener(this.events[i], this.resetToken);
      }
  }

//   timeOut = () => {
//       this.logoutTimeout = setTimeout(this.logoutUser, 5000);
// }
//
//
//   resetTimeout = (e) => {
//     clearTimeout(this.logoutTimeout);
//     this.timeOut();
//   }

  logoutUser = (e) => {
    let username = localStorage.getItem('localStoredName');
    let userKey = localStorage.getItem('localStoredUserKey');
    let userRef = firebase.database().ref('users');
    userRef.child(userKey).remove();
    localStorage.clear();
    this.props.history.replace({
      pathname: "/",
      state: {timedOutSession: true}});
  }

  render() {
    let username = localStorage.getItem('localStoredName');
    return(
      <div>
        <UserList />
        <nav className="topNav">
          <Button
          name="logout"
          className="Button"
          handleSubmit={(e) => this.logoutUser(e)} />
          <h3>Welcome {username}!</h3>
        </nav>
        <Chatbox />
      </div>
    );
  }
}

export default Home;
