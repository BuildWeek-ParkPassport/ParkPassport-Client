import React, { useState, useContext } from 'react';
import ParkContext from '../contexts/ParkContext';
import StarRatingComponent from 'react-star-rating-component';

import { Link } from 'react-router-dom';

import styled from "styled-components";
import {FormTitle,FormP, FormLocation} from "./styled";


const ParkDiv = styled.div`
    width: 25%;
    margin: 2% 1%;
    box-shadow: 0 3px 6px 1px rgba(80, 78, 80, 0.1);
    color: black;
    text-decoration: none;
    &:hover{
        color black;
        text-decoration: none;
        underline: none;
    }
    @media (max-width: 500px){
        width: 90%;
        margin: 2% auto 20px auto;
    }
`



const Park = ({ name, location, description, rating, parkId, park }) => {
    const { isLoggedIn } = useContext(ParkContext);

    const [stars, setStars] = useState();

    return (
        <ParkDiv>
            <Link activeClassName="park-links" to={`/review/${parkId}`}>
                <FormTitle>{name}</FormTitle>
                <FormLocation>{location}</FormLocation>

                {/* <p>{parkId}</p> */}
                <FormP>{description}</FormP>
            </Link>
        </ParkDiv>

    )
}

export default Park;