import {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {OnOff_Uncontrolled} from './OnOff_Uncontrolled';
import React, {useState} from "react";
import {OnOff_Controlled} from "../OnOff/OnOff_Controlled";
const meta: Meta<typeof OnOff_Uncontrolled> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/configure/#configure-story-loading
     * to learn how to generate automatic titles
     */

    component: OnOff_Uncontrolled,

};
export default meta;
type Story = StoryObj<typeof OnOff_Uncontrolled>
export const OnMode=()=><OnOff_Uncontrolled on={true}/>
export const OffMode=()=><OnOff_Uncontrolled on={false}/>
export const DefaultInputValue=()=> <input value={'yo'} readOnly={true}/>