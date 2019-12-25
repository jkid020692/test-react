import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            passWord: ""
        };
    }
    changeUserName(event) {
        let value = event.target.value;
        this.setState((prevState, props) => {
            return {
                userName: value
            };
        });

    }
    changePassWord(event) {
        let value = event.target.value;
        this.setState((prevState, props) => {
            return {
                passWord: value
            };
        });
    }
    login() {
        let state = this.state;
        if (state.userName == "admin" && state.passWord == "123456") {
            this.props.callback(true, state.userName);
        }
        else {
            alert("userName/password chưa đúng")
        }
    }
    render() {
        return (
            <div className='search-box' style={{ width: "100%" }}>
                <div style={{ display: "flex" }}>
                    <label style={{ width: "250px" }}>UserName:</label>
                    <input
                        type="text"
                        value={this.state.userName}
                        onChange={this.changeUserName.bind(this)}
                    />
                </div>
                <div style={{ display: "flex" }}>
                    <label style={{ width: "250px" }}>PassWord:</label>
                    <input
                        type="password"
                        value={this.state.passWord}
                        onChange={this.changePassWord.bind(this)}
                    />
                </div>
                <button onClick={this.login.bind(this)}>Đăng nhập</button>
            </div>
        );
    }
}
export default Login