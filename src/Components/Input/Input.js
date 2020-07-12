import React from 'react';
import './Input.css';

const input = (props) => {
  return (
  <div>
    <input className="Name"
     placeholder={props.placeholder}></input>
  </div>
);
}

export default input;
