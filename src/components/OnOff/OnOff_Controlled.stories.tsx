import {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {OnOff_Controlled} from './OnOff_Controlled';
import React, {useState} from "react";
const meta: Meta<typeof OnOff_Controlled> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/configure/#configure-story-loading
     * to learn how to generate automatic titles
     */

    component: OnOff_Controlled,

};
export default meta;
type Story = StoryObj<typeof OnOff_Controlled>

// export const FirstStory: Story ={
//     args:{
//         title: "Hello",
//         collapsed:true,
//
//     }
// }
const onChangeHandler=()=>{alert('Hello')
}

export const OnMode=()=><OnOff_Controlled on={true} onChange={action("working")}/>
export const OffMode=()=><OnOff_Controlled on={false} onChange={onChangeHandler}/>
export const ModeChanging=()=>{
    const [mode, setMode]= useState(true)
    return <OnOff_Controlled on={mode} onChange={setMode}/>
}
