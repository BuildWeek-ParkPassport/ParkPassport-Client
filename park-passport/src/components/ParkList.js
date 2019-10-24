import React, { useContext } from "react";
import Park from './Park';
import AddPark from './AddPark';
import Search from './Search';
import { ParkContext } from '../contexts/ParkContext';


import styled from "styled-components";

const ParksList = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin 2% auto;
    border: 1px solid black;

`

const ParkList = () => {
    const { parks, isLoggedIn } = useContext(ParkContext);

    return (
        <section>
            {<Search parks={parks}/> }
            <ParksList>
            {parks.map(park => (
                
                    <Park 
                        name={park.name} 
                        location={park.location} 
                        description={park.description} 
                        parkId={park.id}
                        rating={park.rating}
                    />
                
            ))}
            </ParksList>
            {isLoggedIn && <AddPark /> }
        
    </section>
    );
};

export default ParkList;