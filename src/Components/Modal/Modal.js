import React from 'react';
import Notification from '../Notification/Notification';
import './Modal.css';

const modal = (props) => {
  return (
    <div className="Modal">
      <Notification reset={props.reset}
      timedOutSession={props.timedOutSession}/>
    </div>
);
}

export default modal;
