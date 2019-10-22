import React,{useState, useEffect} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';


const Signup = ({ history }) => {
    // const { isLoggedIn } = useContext(ParkContext);
    // const [user, setUser] = useState({});
    const [creds, setCreds] = useState({ username: '', password: '' });


    const handleChange = e => {
        setCreds({ ...creds, [e.target.name]: e.target.value });
    }

    const signup = e => {
        e.preventDefault();
        axiosWithAuth()
          .post('/auth/register', creds)
          .then(res => {
              console.log(creds);
              localStorage.setItem('token', res.data.token); // Create signup not token
              history.push('/login');
          })
          .catch(err => console.error(err));
    };
    
    return (
        <div>
            <form onSubmit={signup}>
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
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;

