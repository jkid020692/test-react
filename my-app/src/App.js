import React from "react";
import Login from './login';
import CategoryList, {CategoryDetailRoute} from './category';
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
    return (
      <Router>
          {
            isLoggedIn ?
              <>
              <Redirect push to="/category" />
              <Route exact path="/category">
                <CategoryList />
              </Route>
              <Route path="/category/:id" render={(routerProps => <CategoryDetailRoute /> )} />
                {/* <Redirect push to="/category" />
                <Route path="/category" exact component={CategoryList} /> */}
              </>
              :
              <Route path="/login">
                <Login callback={this.callbackFunction} />
              </Route>
          }
      </Router>
    )
  }
}
export default App;