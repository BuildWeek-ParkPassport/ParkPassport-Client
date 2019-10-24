import React, {useEffect} from 'react'

const CommentandReview = (props) => {
    // useEffect((event) => {
    //     event.preventDefault();
    // },[event.props.onSubmit])
    return (
        <div>
            <form onSubmit={props.onSubmit}>
            <label>Comment</label>
            <input 
                type='text'
                name='comment'
                onChange={props.handleChange}
                Value={props.reviewComment}
                />
                <label>Rating</label>
                <input 
                type='number'
                name='rating'
                onChange={props.handleChange}
                Value={props.reviewRating}
                />
            <button>Submit Review</button>
        </form>
        </div>
    )
}
export default CommentandReview