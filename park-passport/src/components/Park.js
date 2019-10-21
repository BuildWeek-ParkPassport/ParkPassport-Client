import React from 'react';
import Rating from "./Rating";

const Park = ({ name, location, description, rating }) => {
    const { isLoggedIn } = useContext(ParkContext);

    return (
        <div>
            <Rating rating={rating}/>
            <h3>{name}</h3>
            <h4>{location}</h4>
            <p>{description}</p>
            {isLoggedIn && <Comment /> }
        </div>
    )
}