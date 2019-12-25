import React from "react";
import Login from './login';
import CategoryList from './category';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      username: ""
    };
    this.callbackFunction = this.callbackFunction.bind(this);
  }
  callbackFunction(isLoggedIn, username) {
    this.setState((prevState, props) => {
      return {
        isLoggedIn: isLoggedIn,
        username: username
      };
    });
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if (!isLoggedIn) {
      return (
        <Router>
          <Switch>
            <Route path="/login">
              <Login callback={this.callbackFunction} />
            </Route>
          </Switch>
        </Router>

      );
    }
    else {
      return (
        <Router>
        <Redirect push to="/category" />
        <Route path="/category" component={CategoryList}/>
      </Router>
      );
    }

  }

}
export default App;