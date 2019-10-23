import React, { useContext } from 'react';
import Rating from "./Rating";
import Comment from './Comment';
import ParkContext from '../contexts/ParkContext';
import AddPark from './AddPark';


const Park = ({ name, location, description, rating }) => {
    const { isLoggedIn } = useContext(ParkContext);

    return (
        <div>
            {/* <Rating rating={rating}/> */}
            <h3>{name}</h3>
            <h4>{location}</h4>
            <p>{description}</p>
            {isLoggedIn && <Comment /> }
            { isLoggedIn && <AddPark /> }
            
        </div>
    )
}

export default Park;