import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import {FormTitle, SearchHold, Formy, InputHold,TextInput,SubmitBtn} from "./styled"
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
        <SearchHold>
            <Formy onSubmit={addPark}>
                <InputHold>
                    {/* <label> Name: </label> */}
                    <TextInput
                    type='text'
                    name='name'
                    value={newPark.name}
                    onChange={handleChange}
                    placeholder="What's the park called?"
                    />
                </InputHold>
                <InputHold>
                    {/* <label> Description: </label> */}
                    <TextInput
                    type='text'
                    name='description'
                    value={newPark.description}
                    onChange={handleChange}
                    placeholder="How was your experience (be brief)?"
                    />
                </InputHold>
                <InputHold>
                    {/* <label> Location: </label> */}
                    <TextInput
                    type='text'
                    name='location'
                    value={newPark.location}
                    onChange={handleChange}
                    placeholder="Where is the park located (city/state please)?"
                    />
                </InputHold>
                <SubmitBtn type='submit'>Add Park</SubmitBtn>
            </Formy>
        </SearchHold>
    );
};

export default AddPark;