import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import ParkContext from '../contexts/ParkContext';

const Search = () => {
    const { parks } = useContext(ParkContext);
    const [query, setQuery] = useState("");
    const [getParks, setGetParks] = useState({ parks });

    const handleChange = e => {
        e.preventDefault();
        setQuery(e.target.value);
  };

    useEffect(() => {
        axios
          .get('/parks', getParks)
          .then(res => {
            console.log(res)
            const searchResults = res.data.results.filter(park =>
              park.name.toLowerCase().includes(query.toLowerCase())
            );
            
            setGetParks(searchResults);
          })
          .catch(error => {
            console.log(error)
          })
      }, [query]);

     return (
        <div className='list'>
          <form className="search" >
         <input
           type='text'
           onChange={handleChange}
           value={query}
           name='name'
           tabIndex='0'
           className='prompt search-name'
           placeholder='search by name'
           autoComplete='off'
         />
      </form>
        </div>
      );  
};

export default Search;