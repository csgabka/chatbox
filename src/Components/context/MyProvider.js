import React, { Component } from 'react';

import MyContext from './MyContext';

class MyProvider extends Component {


  render() {
    return(
      <MyContext.Provider value={{
        state: this.state,
        changeHandler: this.changeHander,
        handleSubmit: this.handleSubmit
        }
      }>
      {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
