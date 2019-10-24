import React, { useContext } from 'react';
import ParkContext from '../contexts/ParkContext';
import { Link } from 'react-router-dom';


const Park = ({ name, location, description, rating, parkId, park }) => {
    const { isLoggedIn } = useContext(ParkContext);

    return (
        <div>
            <h3>{name}</h3>
            <h4>{location}</h4>
            {/* <p>{parkId}</p> */}
            <p>{description}</p>
        </div>
    )
}

export default Park;