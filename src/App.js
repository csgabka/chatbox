import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timedOutSession: false
    }
  }

  timeoutLogoutUser = () => {
    this.setState({timedOutSession: true})
  }

  resetSession = (e) => {
    this.setState({timedOutSession: false})
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
        <Switch>
          <Route 
          path="/" exact render={(props) =>
            <Auth {...props} resetSession={(e) => this.resetSession(e)} timedOutSession={this.state.timedOutSession} />} />
          <Route path="/chat" exact render={(props) =>
            <Home {...props}
            timeoutLogoutUser={this.timeoutLogoutUser}
            timedOutSession={this.state.timedOutSession} />} />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>


      );
  }

}

export default App;
