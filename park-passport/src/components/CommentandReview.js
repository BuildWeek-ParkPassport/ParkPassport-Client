import React, {useEffect} from 'react'
import {FormTitle, FormHold, Formy, InputHold,TextInput,SubmitBtn} from "./styled"
import PhotoUpload from './PhotoUpload';

const CommentandReview = (props) => {
    // useEffect((event) => {
    //     event.preventDefault();
    // },[event.props.onSubmit])
    return (
        <FormHold>
            <FormTitle>How Was Your Experience?</FormTitle>
            <Formy onSubmit={props.onSubmit}>
                <InputHold>
                    {/* <label>Comment</label> */}
                    <TextInput 
                    type='text'
                    name='comment'
                    placeholder='Did you love or hate this park?'
                    onChange={props.handleChange}
                    Value={props.reviewComment}
                    />
                </InputHold>
                <InputHold>
                    {/* <label>Rating</label> */}
                    <TextInput 
                    type='number'
                    name='rating'
                    placeholder='How would you rate it (on a scale from 1-5)?'
                    onChange={props.handleChange}
                    Value={props.reviewRating}
                    />
                </InputHold>
                <PhotoUpload />
            <SubmitBtn type="submit">Submit</SubmitBtn>
        </Formy>
        </FormHold>
    )
}
export default CommentandReview