import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import * as Dashboard from './dashboard';
//import App from './App';
import * as Category from './category'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const routes = [
    {
      path: "/",
      component: Login
    },
    {
      path: "/category",
      component: Category
    }
  ];
  export default function RouteConfigExample() {
    return (
      <Router>
        <div>
          
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    );
  }
  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }