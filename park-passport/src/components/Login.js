import React,{useState, useEffect, useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

import {FormHold,FromTitle,Formy,InputHold,TextInput,SubmitBtn} from "./styled";


import ParkContext from '../contexts/ParkContext';

const Login = ({ history }) => {
    const { setIsLoggedIn } = useContext(ParkContext);
    // const [user, setUser] = useState({});
    const [creds, setCreds] = useState({ username: '', password: '' });


    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    const login = e => {
        e.preventDefault();
        if(creds.username.length ===0 || creds.password.length ===0){
            alert("Youre missing something there")
        }
        axiosWithAuth()
          .post('/auth/login', creds)
          .then(res => {
              console.log(creds);
              localStorage.setItem('token', res.data.token);
              setIsLoggedIn(true);
              history.push('/parklist');
          })
          .catch(err => console.error(err));
    };
    
    return (
        <div>
            <FormHold>
                <FromTitle>Login Form</FromTitle>
                <Formy onSubmit={login}>
                    <InputHold>
                        <label>Username:</label>
                        <TextInput
                        type='text'
                        name='username'
                        placeholder="Username"
                        value={creds.username}
                        onChange={handleChange}
                        / >
                    </InputHold>
                    <InputHold>
                        <label>Password:</label>
                        <TextInput
                        type='password'
                        name='password'
                        placeholder="Password"
                        value={creds.password}
                        onChange={handleChange}
                        / >
                    </InputHold>
                    <SubmitBtn type='submit'>Log In</SubmitBtn>
                </Formy>
            </FormHold>
            {/* <Link to='/parklist'><SubmitBtn type='submit'>Continue As Guest</SubmitBtn></Link>
            <SubmitBtn type='submit'>Sign Up</SubmitBtn> */}
        </div>
    );
};

export default Login;

