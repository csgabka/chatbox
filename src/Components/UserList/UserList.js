import React, {Component} from 'react';
import firebase from '../../firebase.js';
import './UserList.css';

class  UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onlineUsers: [],
      offlineUsers: []
    }
  }

  componentDidMount() {
    let userRefOn = firebase.database().ref('online');
    userRefOn.on('value', snapshot => {
      const getOnlineUsers = snapshot.val();
      let onlineUsers = [];
      for(let user in getOnlineUsers){
        onlineUsers.push({
          onlineUsers: onlineUsers
        });
      }
      this.setState({onlineUsers: onlineUsers});
  });
  let userRefOff = firebase.database().ref('offline');
  userRefOff.on('value', snapshot => {
    const getOfflineUsers = snapshot.val();
    let offlineUsers = [];
    for(let user in getOfflineUsers){
      offlineUsers.push({
        offlineUsers: offlineUsers
      });
    }
    this.setState({offlineUsers: offlineUsers});
});
}

  render() {
    const { onlineUsers, offlineUsers } = this.state;
    console.log(offlineUsers);
    return (
      <div className="UserList">
        <h1 className="UserListTitle">Users</h1>
        <h2 className="UserListTitle">Online</h2>
        <ul>
        {offlineUsers.map(user => {
          return <li></li>
        })}

        </ul>
        <h2 className="UserListTitle">Offline</h2>
      </div>
    );
  }
}

export default UserList;
