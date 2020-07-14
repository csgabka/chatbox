import React, { Component } from  'react';
import Chatbox from '../Chatbox/Chatbox';

class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <h3>Welcome {this.props.location.state.username}!!!</h3>
        <Chatbox username={this.props.location.state.username}/>
      </div>
    );
  }
}

export default Home;
