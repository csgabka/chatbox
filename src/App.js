import React, {Component} from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import './App.css';

class App extends Component {


  render() {
    console.log(process.env);
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
