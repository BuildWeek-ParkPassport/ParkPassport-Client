import React,{useState, useEffect} from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const LoginForm = ({values, status, touched, errors})=>{
    const [user, setUser] = useState({})

    useEffect(()=>{
        status && setUser(status);
        console.log("status", status)
        
    },[status])
    return(
        <div className="FormHold">
            <h1 className="FormTitle">Login Form</h1>
            <Form className ="Formy">
                <div className ="InputHold">
                    <label>Username:</label>
                    <Field type = "text" name="username" placeholder ="Username"/>
                </div>
                <div className="InputHold">
                    <label>Password:</label>
                    <Field type = "text" name="password" placeholder ="Password"/>
                </div>
                <button className="submitBtn" type="submit">Login</button>
            </Form>
        </div>
    );
}
const FLogin = withFormik({

mapPropsToValues({username, password}){

    return{
        username: username || "",
        password: password || ""
    };
},

validationSchema: Yup.object().shape({
    username: Yup.string().required("please enter a username"),
    password: Yup.string().required("Please enter a password")
}),

handleSubmit(values, {setStatus}){
    setStatus(values);
    console.log("values", values);
}


   
})(LoginForm)

export default FLogin;
