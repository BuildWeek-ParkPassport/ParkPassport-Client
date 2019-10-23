import React, { useContext, useState } from "react";
// import { ParkContext } from '../contexts/ParkContext';
import axiosWithAuth from '../utils/axiosWithAuth';

const Comment = (props) => {
    // const { isLoggedIn, setParks } = useContext(ParkContext);
  const [review, setReview] = useState({ rating: null, comment: '', id: props.parkId });

  const handleChange = e => {
    setReview({ ...review, [e.target.name]: e.target.value });
};

   const onSubmit = (e) => {
       console.log(review);
    e.preventDefault();
      axiosWithAuth()
       .post('/parks/ratings', review)
       .then(res => {
        console.log("review", res);
        setReview({ review });
        props.history.push('/parklist')
    })
    .catch(err => console.error(err));
};
        // api call to add comment goes here
        // set new parks state

    return (
        <form onSubmit={onSubmit}>
            <label>Comment</label>
            <input 
              type='text'
              name='comment'
              onChange={handleChange}
              value={review.comment}
              />
              <label>Rating</label>
              <input 
              type='number'
              name='rating'
              onChange={handleChange}
              value={review.rating}
              />
            <button>Submit Review</button>
        </form>
    )
};

export default Comment;