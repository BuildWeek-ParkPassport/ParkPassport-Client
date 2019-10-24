import React, { useContext } from 'react';
import ParkContext from '../contexts/ParkContext';

import { Link } from 'react-router-dom';

import styled from "styled-components";
import {FormTitle} from "./styled";


const ParkDiv = styled.div`
    width: 25%;
    margin: 2% 1%;
    border: 1px solid black;
`



const Park = ({ name, location, description, rating, parkId, park }) => {
    const { isLoggedIn } = useContext(ParkContext);

    return (
        <ParkDiv>
            <Link to={`/review/${parkId}`}>
                <FormTitle>{name}</FormTitle>
                <h4>{location}</h4>

                {/* <p>{parkId}</p> */}
                <p>{description}</p>
            </Link>
        </ParkDiv>

    )
}

export default Park;