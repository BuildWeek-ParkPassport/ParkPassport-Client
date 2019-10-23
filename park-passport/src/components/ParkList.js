import React, { useContext } from "react";
import Park from './Park';
import AddPark from './AddPark';
import Search from './Search';
import { ParkContext } from '../contexts/ParkContext';


const ParkList = () => {
    const { parks, isLoggedIn } = useContext(ParkContext);

    return (
        <div className="park-list">
            {<Search /> }
            {parks.map(park => (
                <div>
                    <Park 
                        name={park.name} 
                        location={park.location} 
                        description={park.description} 
                        // parkId={park.id}
                        rating={park.rating}
                    />
                </div>
            ))}
            {isLoggedIn && <AddPark /> }
        </div>
    );
};

export default ParkList;