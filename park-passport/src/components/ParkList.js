import React, { useContext } from "react";
import Park from './Park';
import AddPark from './AddPark';
import Search from './Search';
import { ParkContext } from '../contexts/ParkContext';
<<<<<<< HEAD
import {FromHold,FromTitle, FormHold} from "./styled"
=======
import { Link } from 'react-router-dom';
>>>>>>> 7c2bdffe7e07d6b0d572e11875e1e79b5010bbe3


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
<<<<<<< HEAD
        <FormHold className="park-list">
=======
        <section>
>>>>>>> 7c2bdffe7e07d6b0d572e11875e1e79b5010bbe3
            {<Search parks={parks}/> }
            <ParksList>
            {parks.map(park => (
                    
                    <Link to={`/review/${park.id}`}>
                        <Park 
                        name={park.name} 
                        location={park.location} 
                        description={park.description} 
                        parkId={park.id}
                        rating={park.rating}
                        />
                    </Link>
            ))}
            </ParksList>
            {isLoggedIn && <AddPark /> }
<<<<<<< HEAD
        </FormHold>
=======
        
    </section>
>>>>>>> 7c2bdffe7e07d6b0d572e11875e1e79b5010bbe3
    );
};

export default ParkList;