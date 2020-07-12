import React, { Component } from  'react';
import Backdrop from '../Backdrop/Backdrop';

class Error extends Component {
  render() {
    return(
      <div>
      <Backdrop>
        <h1>Oooooops...something went wrong!</h1>
      </Backdrop>
      </div>
    );
  }
}

export default Error;
