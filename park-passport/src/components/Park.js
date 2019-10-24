import React, { useContext } from 'react';
import Comment from './Comment';
import ParkContext from '../contexts/ParkContext';
import styled from "styled-components";
import {FormTitle} from "./styled";


const ParkDiv = styled.div`
    width: 25%;
    margin: 2% 1%;
    border: 1px solid black;
`

const Park = ({ name, location, description, rating, parkId }) => {
    const { isLoggedIn } = useContext(ParkContext);

    return (
        <ParkDiv>
            <FormTitle>{name}</FormTitle>
            <h4>{location}</h4>
            <p>{description}</p>
            {isLoggedIn && <Comment parkId={parkId}/> }
        </ParkDiv>
    )
}

export default Park;