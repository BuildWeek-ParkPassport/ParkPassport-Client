import React, {useEffect} from 'react'
import {FormTitle, FormHold, Formy, InputHold,TextInput,SubmitBtn} from "./styled"

const CommentandReview = (props) => {
    // useEffect((event) => {
    //     event.preventDefault();
    // },[event.props.onSubmit])
    return (
        <FormHold>
            <FormTitle>Tell us about it</FormTitle>
            <Formy onSubmit={props.onSubmit}>
                <InputHold>
                    <label>Comment</label>
                    <TextInput 
                    type='text'
                    name='comment'
                    onChange={props.handleChange}
                    Value={props.reviewComment}
                    />
                </InputHold>
                <InputHold>
                    <label>Rating</label>
                    <TextInput 
                    type='number'
                    name='rating'
                    onChange={props.handleChange}
                    Value={props.reviewRating}
                    />
                </InputHold>
            <SubmitBtn type="submit">Submit</SubmitBtn>
        </Formy>
        </FormHold>
    )
}
export default CommentandReview