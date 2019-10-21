import React from "react";
import { ParkContext } from '../contexts/ParkContext';
import { format } from "url";

const Comment = () => {
    const { isLoggedIn, setParks } = useContext(ParkContext);
    const [comment, setComment] = useState('')

    onSubmit = (e) => {
        e.preventDefault();
        // api call to add comment goes here
        // set new parks state
    }

    return (
        <form onSubmit={onSubmit}>
            <input  value={comment}></input>
            <button>Submit</button>
        </form>
    )
}
