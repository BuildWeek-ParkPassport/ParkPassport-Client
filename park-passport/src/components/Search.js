import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {FormTitle, SearchHold, Formy, InputHold,TextInput,SubmitBtn} from "./styled"
import ParkContext from '../contexts/ParkContext';


const Search = (props) => {
    const { setParks } = useContext(ParkContext);
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = e => {
        console.log(query)
        e.preventDefault();
        setQuery(e.target.value);
};

const handleSubmit = e => {
      e.preventDefault();
      const foundParks = props.parks.filter(park => park.name.toLowerCase().includes(query));
      setSearchResults(foundParks);
      console.log(searchResults);
      setParks(foundParks);
    };

     return (
        <SearchHold className='list'>
          <FormTitle>Search</FormTitle>
          <Formy className="search" onSubmit={handleSubmit} >
          <InputHold>
            <TextInput
              type='text'
              onChange={handleChange}
              value={query}
              name='name'
              tabIndex='0'
              className='prompt search-name'
              placeholder='search by name'
              autoComplete='off'
            />
         </InputHold>
         <SubmitBtn type="submit">Submit</SubmitBtn>
      </Formy>
        </SearchHold>
      );  
};

export default Search;