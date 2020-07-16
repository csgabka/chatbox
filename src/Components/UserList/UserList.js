import React, {Component} from 'react';
import firebase from '../../firebase.js';
import './UserList.css';

class  UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: []
    }
  }

  componentDidMount() {
    let userRef = firebase.database().ref('online');
    userRef.on('value', snapshot => {
      const getUsers = snapshot.val();
      let activeUsers = [];
      for(let user in getUsers){
        activeUsers.push({
          activeUsers: activeUsers
        });
      }
      this.setState({activeUsers: activeUsers});
      console.log(this.state.activeUsers);
  });
}

  render() {
    const { activeUsers } = this.state;

    return (
      <div className="UserList">
        <h1 className="UserListTitle">Users</h1>
        <h2 className="UserListTitle">Online</h2>
        <ul>
        {activeUsers.map(user => {
          return <li>!TO DO!</li>
        })}

        </ul>
        <h2 className="UserListTitle">Offline</h2>
      </div>
    );
  }
}

export default UserList;
