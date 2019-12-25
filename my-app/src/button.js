import React from 'react';
import ReactDOM from 'react-dom';

// Create a ES6 class component
class Button extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        text: "Please Click me!",
        clickCount: 0
      };
    }
    // Method updateCount()
    updateCount() {
        let that = this;
      this.setState((prevState, props) => {
          debugger
        let a = that;
        let b = that.state;
        return {
          clickCount: that.state.clickCount + 1,
          text: that.state.text + 1
        };
      });
    }
   
    render() {
      return (
        <button onClick={() => this.updateCount()}>
          {this.state.text} : {this.state.clickCount}
        </button>
      );
    }
  }
   
  // Render
  ReactDOM.render(<Button />, document.getElementById("button1"));
   
  // Render
  ReactDOM.render(<Button />, document.getElementById("button2"));