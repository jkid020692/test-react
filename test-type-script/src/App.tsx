import React, { FC, useState } from 'react';
import './App.css';
import Login from './Login';
import CategoryList from './CategoryList';
import CategoryDetail from './CategoryDetail';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

const App: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const  callbackFunction = (isLoggedIn: boolean) => {
    setIsLoggedIn(isLoggedIn);
  }
  return(
    <Router>
          {
            isLoggedIn ?
              <>
              <Redirect push to="/category" />
              <Route exact path="/category">
                <CategoryList />
              </Route>
              <Route path="/category/:id" component={CategoryDetail} />
              </>
              :
              <Route path="/login">
                <Login callback={callbackFunction} />
              </Route>
          }
      </Router>
  );
}

export default App;
