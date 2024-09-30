import {Meta} from "@storybook/react";
import {Rating} from "../Rating/Rating";
import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


const meta: Meta = {
    title: 'Select'
};

export default meta;
type ItemType ={
    title:string
    value: string
}
const itemsArray:ItemType[]=[
    // {title:'Choose Anybpdy', value:0},
    {title:'Alex',value:"1"},
    {title:'Bond',value:"2"},
    {title:'George',value:"3"},
    {title:'Leyhe',value:"4"}];
export const UncontrolledSelectWithFixedValue=()=> {
   return <select>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiyv</option>
    </select>
}

export const withValue=()=> {
    const [value, setValue] = React.useState('2');
   return <>
  <Select value={value} onChange={setValue} items={itemsArray}/>

    </>
}
export const withoutValue =()=>{
    const [value, setValue] = React.useState(null);

    return<>
    <Select  value={value} onChange={setValue} items={itemsArray}/>
    </>
}