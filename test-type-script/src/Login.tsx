import React, { FC, useState } from 'react';

interface IProps {
    callback: (isLogin: boolean) => void;
};

const LoginAccount: FC<IProps> = (props: IProps) => {   
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const login = () => {       
        if (userName == "admin" && passWord == "123456") {
            props.callback(true);
        }
        else {
            alert("userName/password chưa đúng")
        }
    }
    return (
        <div className='search-box' style={{ width: "100%" }}>
            <div style={{ display: "flex" }}>
                <label style={{ width: "250px" }}>UserName:</label>
                <input
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
            </div>
            <div style={{ display: "flex" }}>
                <label style={{ width: "250px" }}>PassWord:</label>
                <input
                    type="password"
                    value={passWord}
                    onChange={e => setPassWord(e.target.value)}
                />
            </div>
           
            <button onClick={login}>Đăng nhập</button>
        </div>
    );
}
export default LoginAccount