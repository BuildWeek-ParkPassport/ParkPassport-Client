import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddPark = props => {
    // useContext?
    const [ newPark, setNewPark ] = useState({ name: '', description: '', location: '' });

    const handleChange = e => {
        setNewPark({ ...newPark, [e.target.name]: e.target.value });
    };

    const addPark = () => {
        axiosWithAuth()
        .post('/parks', newPark)
        .then(res => console.log(res.data))
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