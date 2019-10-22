import React, { useContext, useState } from "react";
import { ParkContext } from '../contexts/ParkContext';
import { format } from "url";
import axiosWithAuth from '../utils/axiosWithAuth';

const Comment = () => {
    const { isLoggedIn, setParks } = useContext(ParkContext);
    const [comment, setComment] = useState('')

   const onSubmit = (e) => {
       e.preventDefault();
    axiosWithAuth()
    .post('/auth/login', comment)
    .then(res => {
        console.log(comment);
        // setParks()
        // history.push('/parklist');
    })
    .catch(err => console.error(err));
};
        // api call to add comment goes here
        // set new parks state

    return (
        <form onSubmit={onSubmit}>
            <input value={comment}></input>
            <button>Submit Comment</button>
        </form>
    )
};

export default Comment;