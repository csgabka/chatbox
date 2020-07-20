import React from 'react';
import './Input.css';

const input = (props) => {
  return (
  <div>
    <input
    onFocus={props.onFocus}
    value={props.value}
    className={props.className}
     placeholder={props.placeholder}
     onChange={props.changeHandler}></input>
  </div>
);
}

export default input;
