import React from 'react';
import Button from '../Button/Button';
import './Notification.css';

const notification = (props) => {
  return (
  <div className={props.className}>
    <p className="logout error">You've been logged out
    due to inactivity! <br />Please login again!
    </p>
    <Button
    className="Button"
    name="OK!"
    handleSubmit={props.reset}/>
  </div>
);
}

export default notification;
