// Replace your-framework with the name of your framework
import {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {AccordionBody, AccordionTitle, UncontrolledAccordion} from './UncontrolledAccordion';
import React from "react";

const meta: Meta<typeof UncontrolledAccordion> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/configure/#configure-story-loading
     * to learn how to generate automatic titles
     */

    component: UncontrolledAccordion,

};

export default meta;
type Story = StoryObj<typeof UncontrolledAccordion>

// export const FirstStory: Story ={
//     args:{
//         title: "Hello",
//         value:4,
//
//     }
// }
export const UnControlledVersion =()=> {
    const [collapsed, setCollapsed] = React.useState(false);
   return(
           <UncontrolledAccordion title={"Uncontrolled Version Of Accordion"} value={4}/>
   )}



