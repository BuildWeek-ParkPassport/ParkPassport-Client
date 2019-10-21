import React from "react";
import { ParkContext } from '../contexts/ParkContext';
import { directive } from "@babel/types";

const Rating = (props) => {
    const { isLoggedIn } = useContext(ParkContext);

    getRating = () => {
        const stars = [];
        for(let i = 0; i < 5; i++){
            if(props.rating > i){
                stars.push(<div className="color-star"></div>)
            }else {
                stars.push(<div className="star"></div>)
            }
        }
        return stars;
    }

    return (
        <div>
            {getRating()}
            {isLoggedIn && <button>Add Rating</button>}
        </div>
    )
}