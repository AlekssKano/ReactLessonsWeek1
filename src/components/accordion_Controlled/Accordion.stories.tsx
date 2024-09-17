// Replace your-framework with the name of your framework
import {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import { Accordion1 } from './Accordion';
import React from "react";

const meta: Meta<typeof Accordion1> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/configure/#configure-story-loading
     * to learn how to generate automatic titles
     */

    component: Accordion1,

};

export default meta;
type Story = StoryObj<typeof Accordion1>

export const FirstStory: Story ={
args:{
    title: "Hello",
    collapsed:true,

}
}


const onChangeHandler= action('OnChange')

export const CollapsedAccordion = () => {
    return <div><Accordion1 title={"Collapsed Accordion"}
                            value={5} collapsed={true}
                            onChange={onChangeHandler}/>
    </div>
}
export const OpenedAccordion = () => {
    return <div><Accordion1 title={"Opened Accordion"}
                            value={5} collapsed={false}
                            onChange={() => {}}/>
    </div>
}
export const Accordion = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    return <div><Accordion1 title={"Accordion"}
                            value={5} collapsed={collapsed}
                            onChange={() => {setCollapsed(!collapsed)}}/>
    </div>
}