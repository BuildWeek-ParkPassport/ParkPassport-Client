import React, { useContext } from "react";
import Park from './Park';
import AddPark from './AddPark';
import Search from './Search';
import { ParkContext } from '../contexts/ParkContext';
import { Link } from 'react-router-dom';


const ParkList = () => {
    const { parks, isLoggedIn } = useContext(ParkContext);

    return (
        <div className="park-list">
            {<Search parks={parks}/> }
            {parks.map(park => (
                <div>
                    
                    <Link to={`/review/${park.id}`}>
                      <Park 
                        name={park.name} 
                        location={park.location} 
                        description={park.description} 
                        parkId={park.id}
                        rating={park.rating}
                    />
                    </Link>
                    {/* {isLoggedIn && <button onClick="/review/${park.id}">Review</button>} */}
                </div>
            ))}
            {isLoggedIn && <AddPark /> }
        </div>
    );
};

export default ParkList;