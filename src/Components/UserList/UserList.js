import React, {Component} from 'react';
import firebase from '../../firebase.js';
import './UserList.css';
import ColoredLine from '../ColoredLine/ColoredLine';

class  UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    //TO DO!
    let userRef = firebase.database().ref('users');
    userRef.on('value', snapshot => {
      const getUsers = snapshot.val();
      let users = [];
      for(let user in getUsers){
        users.push({
          username: getUsers[user].username
        });
      }
      this.setState({users: users});
  });
}

  render() {
      return (
      <div className="UserList">
        <h1 className="UserListTitle">Online</h1>
        <ul>
        {this.state.users.map((user, index) => {
          return (
            <div key={index}>
            <li className="OnlineUsers">{user.username}</li>
            <ColoredLine color="#B2B8B8" />
            </div>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default UserList;
