import React, {Component} from 'react';
import firebase from '../../firebase.js';
import './UserList.css';

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
          users: users
        });
      }
      this.setState({users: users});
  });
}

  render() {
      return (
      <div className="UserList">
        <h1 className="UserListTitle">Users</h1>
        <ul>
        {this.state.users.map((user, index) => {
          return (
            <li key={index}>{user.username}</li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default UserList;
