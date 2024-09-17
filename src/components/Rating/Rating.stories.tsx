import {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Rating, RatingValueType} from './Rating';
import React, {useState} from "react";
const meta: Meta<typeof Rating> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/configure/#configure-story-loading
     * to learn how to generate automatic titles
     */

    component: Rating,

};
export default meta;
type Story = StoryObj<typeof Rating>

// export const FirstStory: Story ={
//     args:{
//         title: "Hello",
//         collapsed:true,
//
//     }
// }
const onChangeHandler=()=>{alert('Hello')
}

export const EmptryRating=()=><Rating value={0} onClick={onChangeHandler}/>
export const Rating1 =()=><Rating value={1} onClick={onChangeHandler}/>
export const Rating2 =()=><Rating value={2} onClick={onChangeHandler}/>
export const Rating3 =()=><Rating value={3} onClick={onChangeHandler}/>
export const Rating4 =()=><Rating value={4} onClick={onChangeHandler}/>
export const Rating5 =()=><Rating value={5} onClick={onChangeHandler}/>

export const ChangeRating=()=>{
    const [rating,setRating]=useState<RatingValueType>(5);
    return <Rating value={rating} onClick={setRating}/>
}