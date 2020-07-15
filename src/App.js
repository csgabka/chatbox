import React, {Component} from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import './App.css';

class App extends Component {


  render() {

    return (

      <HashRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
        <Switch>
          <Route path="/" exact component={Auth} />
          <Route path="/chat" exact component={Home} />
          
        </Switch>
        </div>
      </HashRouter>


      );
  }

}

export default App;
