import React,{useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';
import {FormHold,FromTitle,Formy,InputHold,TextInput, SubmitBtn} from "./styled";


const Signup = ({ history }) => {
    // const { isLoggedIn } = useContext(ParkContext);
    // const [user, setUser] = useState({});
    const [creds, setCreds] = useState({ username: '', password: '' });


    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    const signup = e => {
        e.preventDefault();
        console.log(creds);
        axiosWithAuth()
          .post('/auth/register', creds)
          .then(res => {
              console.log(res.data);
              history.push('/login');
          })
          .catch(err => console.error(err));
    };
    
    return (
        <FormHold>
            <FromTitle>SignUp</FromTitle>
            <Formy onSubmit={signup}>
                <InputHold>
                <label>Username:</label>
                    <TextInput
                        type='text'
                        name='username'
                        placeholder='Username..'
                        value={creds.username}
                        onChange={handleChange}
                    / >
                </InputHold>
                <InputHold>
                <label>Password:</label>
                    <TextInput
                        type='password'
                        name='password'
                        value={creds.password}
                        onChange={handleChange}
                    / >
                </InputHold>
                <SubmitBtn type='submit'>Sign Up</SubmitBtn>
            </Formy>
        </FormHold>
    );
};

export default Signup;

