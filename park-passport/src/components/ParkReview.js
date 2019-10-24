import React, { useEffect, useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { ParkContext } from '../contexts/ParkContext';
import CommentandReview from './CommentandReview'

const ParkReview = (props) => {
  const { isLoggedIn } = useContext(ParkContext);
    const [parkReview, setParkReview] = useState([]);
    const [park, setPark] = useState({});
    const [review, setReview] = useState({ park_id: props.match.params.id, rating: null, comment: '' });

    console.log(park)
    useEffect(() => {  
        
    const id = props.match.params.id;

    axiosWithAuth()
          .get(`/parks/${id}/ratings`)
          .then(res => (setParkReview(res.data), setPark(res.data[0])))
          .catch(err => console.log(err.response));
    }, [props.match.params.id]) 

    

    const handleChange = e => {
      setReview({ ...review, [e.target.name]: e.target.value });
  };
  
     const onSubmit = (e) => {
       console.log(review);
       e.preventDefault();
        axiosWithAuth()
         .post('/parks/ratings/test', review) 
         .then(res => {
          console.log("review", res);
          // setReview({ review });
        //   props.history.push('/parklist')
      })
      .catch(err => console.error(err));
  };

  // useEffect()

    return (
        <div>
            <h1>{park.name}</h1>
            <h2>Reviews</h2>
            {parkReview.map(review => (
                <>
                <h4>{review.username} - {review.rating}</h4>
                <p>{review.comment}</p>
                </>
            ))}
            {/* <form onSubmit={onSubmit}>
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
              /> */}
            {/* <button>Submit Review</button>
        </form> */}
        {isLoggedIn && <CommentandReview handleChange={handleChange} onSubmit={onSubmit} reviewRating={review.rating} reviewComment={review.comment}/> }
        </div>
    )
}

export default ParkReview;