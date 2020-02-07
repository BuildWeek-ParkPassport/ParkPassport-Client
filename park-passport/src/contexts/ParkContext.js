import React, { useState, createContext } from 'react';

export const ParkContext = createContext();

export const ParkProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')? true: false);
    const [parks, setParks] = useState([]);  // useState changed from {} to []

    return(
        <ParkContext.Provider value={{parks, setParks, isLoggedIn, setIsLoggedIn}}>
            {props.children}
        </ParkContext.Provider>
    )
}

export default ParkContext;