import React, { useState, useContext } from "react";
import axios from "axios";
import Park from './Park';
import AddPark from './AddPark';

import { ParkContext } from '../contexts/ParkContext';
import Fuse from 'fuse.js';

const ParkList = () => {
    const { parks, isLoggedIn } = useContext(ParkContext);
    const [searchTerm, setSearchTerm] = useState('')
    const [dogs, setDogs] = useState(false);

  console.log('PARKS', parks)
    // const getParks = () => {
    //       let parksToSearch = [...parks];
    //       if (dogs) {
    //           parksToSearch = parksToSearch.filter(park => park.hasDogs);

    //       }
    //       let options = {
    //         shouldSort: true,
    //         threshold: 0.6,
    //         location: 0,
    //         distance: 100,
    //         maxPatternLength: 32,
    //         minMatchCharLength: 1,
    //         keys: [
    //           "name",
    //           "location",
    //           "description"
    //         ]
    //       };
    
    //       let result = parksToSearch;
    //       if(searchTerm !== ''){
    //         let fuse = new Fuse(parksToSearch, options);
    //         result = fuse.search(searchTerm);
        
    //       }
    //       return result;
    //   }
      

    return (
        <div className="park-list">
            {parks.map(park => (
                <div>
                    <Park 
                        name={park.name} 
                        location={park.location} 
                        description={park.description} 
                        rating={park.rating}
                        
                    />
                    
                </div>
            ))}
        </div>
    );
};


export default ParkList;