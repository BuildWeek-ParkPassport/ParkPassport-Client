import React, { useContext } from 'react';
import Comment from './Comment';
import ParkContext from '../contexts/ParkContext';

const Park = ({ name, location, description, rating, parkId }) => {
    const { isLoggedIn } = useContext(ParkContext);

    return (
        <div>
            <h3>{name}</h3>
            <h4>{location}</h4>
            <p>{parkId}</p>
            <p>{description}</p>
            {isLoggedIn && <Comment parkId={parkId}/> }
        </div>
    )
}

export default Park;