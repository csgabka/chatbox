import React from 'react';

import './Button.css';

const button = (props) => {
  return (
  <div>
    <button className="Login"
    onClick={props.handleSubmit}>{props.name}</button>
  </div>
);
}

export default button;
