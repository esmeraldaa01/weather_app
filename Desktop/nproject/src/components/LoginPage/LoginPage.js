import React, {useState} from "react";
import  "./LoginPage.css"
import {Form, Input} from 'antd';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('')
    let navigate = useNavigate();

    const handleClick = () => {
        if(username.startsWith('admin') && password !== ''){
            navigate(`/admin`);
        }else if (username.startsWith('user') && password !== ''){
            navigate(`/game`);
        }else {
            alert('Invalid User')
        }
    }

    return(
        <div className="container">
        <Form className="form">
            <h3 className="header">Login Page</h3>
            <Input width={100} placeholder='Enter Username' className="input" value={username}
                   onChange={(e) => setUsername(e.target.value)}/>
                <Input width={100} placeholder='Enter Password' type="password" className="input" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            <Button type="primary" width={50} htmlType="submit" onClick={handleClick}>Login</Button>
        </Form>
        </div>
    )
}
export default LoginPage;