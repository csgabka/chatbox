import React from 'react';
import './SingleMessage.css';

const singleMessage = (props) => {
  console.log(props.sender);
  return (
    <li style={(props.sender === 'me') ? {justifyContent: 'flex-start'} : null} key={props.index} className="SingleMessage">
    <span className="Time">{props.postDate.getHours() + ':' + (props.postDate.getMinutes())}</span>
    <span className="UserName">{props.name}</span>
    <span className="Message">{props.message}</span>
    </li>
  );
}

export default singleMessage;
