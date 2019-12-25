import React from "react";
import Login from './login';
import CategoryList from './category';
import { BrowserRouter, Route, Link } from "react-router-dom";
 
import './App.css';
 
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        isLoggedIn :false, 
        username: ""
    };
    this.callbackFunction = this.callbackFunction.bind(this);
}
callbackFunction(isLoggedIn, username){
  this.setState((prevState, props) => {
    return {
      isLoggedIn: isLoggedIn,
      username : username
    };
});
}
  render()  {
    const isLoggedIn = this.state.isLoggedIn;
    if (!isLoggedIn) {
      return  (
        <Login callback={this.callbackFunction} />  
      );
    }
    else{
      return  (
        <CategoryList />
      );
    }
   
  }
 
}
export default App;