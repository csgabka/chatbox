import React from 'react';
import './SingleMessage.css';

const singleMessage = (props) => {
  return (
    <li key={props.index} className="SingleMessage">
    <span className="Time">{props.postDate.getHours() + ':' + (props.postDate.getMinutes())}</span>
    <span className="UserName">{props.name}</span>
    <span className="Message">{props.message}</span>
    </li>
  );
}

export default singleMessage;
