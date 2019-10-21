import React, { useState, useContext } from "react";
import axios from "axios";
import Park from './Park';
import { ParkContext } from '../contexts/ParkContext';

const ParkList = () => {
    const { parks, isLoggedIn } = useContext(ParkContext);
    const [searchTerm, setSearchTerm] = useState('')
    const [dogs, setDogs] = useState(false);



      getParks = () => {
          let parksToSearch = [...parks];
          if (dogs) {
              parksToSearch = parksToSearch.filter(park => park.hasDogs);

          }
          var options = {
            shouldSort: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
              "name",
              "location",
              "description"
            ]
          };
           // "list" is the item array
          let result = parksToSearch;
          if(searchTerm !== ''){
            var fuse = new Fuse(parksToSearch, options);
            result = fuse.search(searchTerm);
        
          }
          return result;
      }
      

    return (
        <div className="park-list">
            {getParks().map(park => (
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