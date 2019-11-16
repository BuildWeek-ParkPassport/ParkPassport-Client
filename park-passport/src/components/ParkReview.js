import React, { useEffect, useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { ParkContext } from '../contexts/ParkContext';
import CommentandReview from './CommentandReview';
import {FormTitle} from "./styled";
import StarRatingComponent from 'react-star-rating-component';

import styled from "styled-components";

const ReviewHold = styled.div`
  width:30%;
  margin: 0 auto;
  @media (max-width: 500px){
    width: 80%;
}
`;

const ParkReview = (props) => {
  const { isLoggedIn } = useContext(ParkContext);
    const [parkReview, setParkReview] = useState([]);
    const [park, setPark] = useState({});
    const [review, setReview] = useState({ park_id: props.match.params.id, rating: null, comment: '' });
    const [stars, setStars] = useState();


    console.log("park",park)
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
       console.log("this ran");
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

  function onStarClick(nextValue, prevValue, name) {
    setStars(nextValue);
}
  // useEffect()

    return (
        <div>
           
            <h1>{park.name}</h1>
            <h2>Reviews</h2>
            {parkReview.map(review => (
                <>
                <ReviewHold>
                  <FormTitle>
                      <StarRatingComponent 
                        name='rating'
                        value={review.rating}
                        starCount={5}
                        starColor={'yellow'}
                        emptyStarColor={'grey'}
                        editing={true}
                        onStarClick={onStarClick}
                  />
            </FormTitle>
                  <p>"{review.comment}"-{review.username}</p>
                  
                </ReviewHold>
                </>
            ))}
        {isLoggedIn && <CommentandReview handleChange={handleChange} onSubmit={onSubmit} reviewRating={review.rating} reviewComment={review.comment}/> }
        </div>
    )
}

export default ParkReview;