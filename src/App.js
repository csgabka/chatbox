import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import './App.css';

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">

        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/chat" exact component={Home} />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
      );
  }

}

export default App;
