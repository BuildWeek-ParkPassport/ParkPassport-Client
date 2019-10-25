import React, { useEffect, useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { ParkContext } from '../contexts/ParkContext';
import CommentandReview from './CommentandReview';
import axios from 'axios'
import {FormTitle} from "./styled";
import styled from "styled-components";

const ReviewHold = styled.div`
  width:30%;
  margin: 0 auto;
`;

const ParkReview = (props) => {
  const { isLoggedIn } = useContext(ParkContext);
    const [parkReview, setParkReview] = useState([]);
    const [park, setPark] = useState({});
    const [review, setReview] = useState({ park_id: props.match.params.id, rating: null, comment: '' });

    console.log("park",park)
    useEffect(() => {  
        
    const id = props.match.params.id;

    axiosWithAuth()
      // axios
          .get(`/parks/${id}/ratings`)
          .then(res => (setParkReview(res.data), setPark(res.data[0])))
          .catch(err => console.log(err.response));
    }, [props.match.params.id]) 

    const handleChange = e => {
      setReview({ ...review, [e.target.name]: e.target.value });
  };
  
     const onSubmit = (e) => {
       console.log(review);
       console.log("this ran");
       e.preventDefault();
       if(review.rating.length === 0 || review.comment.length === 0){
        alert("Youre missing something there")
       }
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
                <ReviewHold>
                  <FormTitle>Rating: {review.rating}</FormTitle>
                  <p>"{review.comment}"-{review.username}</p>
                  
                </ReviewHold>
                </>
            ))}
        {isLoggedIn && <CommentandReview handleChange={handleChange} onSubmit={onSubmit} reviewRating={review.rating} reviewComment={review.comment}/> }
        </div>
    )
}

export default ParkReview;