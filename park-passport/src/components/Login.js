import React,{useState, useEffect} from "react";
// import { Formik, Form, Field, withFormik } from "formik";
// import * as Yup from "yup";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';


const Login = ({ history }) => {
    // const { isLoggedIn } = useContext(ParkContext);
    // const [user, setUser] = useState({});
    const [creds, setCreds] = useState({ username: '', password: '' });


    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
          .post('/auth/login', creds)
          .then(res => {
              console.log(creds);
              localStorage.setItem('token', res.data.token);
              history.push('/parklist');
          })
          .catch(err => console.error(err));
    };
    
    return (
        <div>
            <form onSubmit={login}>
                <input
                  type='text'
                  name='username'
                  value={creds.username}
                  onChange={handleChange}
                  / >
                <input
                  type='password'
                  name='password'
                  value={creds.password}
                  onChange={handleChange}
                  / >
                <button type='submit'>Log In</button>
                <Link to='/parklist'><button type='submit'>Continue As Guest</button></Link>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default Login;

