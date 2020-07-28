import React from 'react';
import './Backdrop.css';

const backdrop = (props) => {
  return (
  <div className={props.className}>
    {props.children}
  </div>
);
}

export default backdrop;
