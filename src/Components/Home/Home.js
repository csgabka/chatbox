import React, { Component } from  'react';
import Chatbox from '../Chatbox/Chatbox';
import UserList from '../UserList/UserList';


class Home extends Component {

  render() {
    let username = localStorage.getItem('localStoredName');
    return(
      <div>
        <UserList />
        <h1>Chatbox</h1>
        <h3>Welcome {username}!!!</h3>
        <Chatbox />
      </div>
    );
  }
}

export default Home;
