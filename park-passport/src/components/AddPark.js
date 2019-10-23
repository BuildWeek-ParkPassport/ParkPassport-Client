import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
// import ParkContext from '../contexts/ParkContext';


const AddPark = (props) => {
    // const { setParks } = useContext(ParkContext);
    const [ newPark, setNewPark ] = useState({ name: '', description: '', location: '' });

    const handleChange = e => {
        setNewPark({ ...newPark, [e.target.name]: e.target.value });
    };

    const addPark = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post('/parks', newPark) 
        .then(res => {
            console.log("response", res);
            setNewPark({ newPark });
            props.history.push('/parklist');
        })
        .catch(err => console.log(err.response));
    };

    return (
        <form onSubmit={addPark}>
            <label> Name </label>
            <input
              type='text'
              name='name'
              value={newPark.name}
              onChange={handleChange}
              />
            <label> Description </label>
            <input
              type='text'
              name='description'
              value={newPark.description}
              onChange={handleChange}
              />
            <label> Location </label>
            <input
              type='text'
              name='location'
              value={newPark.location}
              onChange={handleChange}
              />
              <button type='submit'>Add Park</button>
        </form>
    );
};

export default AddPark;