import React, {ChangeEvent, useRef} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Rating} from "../components/Rating/Rating";
// Replace your-framework with the name of your framework


const meta: Meta = {
    title: 'input'
};

export default meta;


export const UncontrolledInputWithFixedValue=()=> <input/>

export const TrackingValueOfUncontrolledInputWith=()=> {
const [value, setValue] = React.useState('');
const onChange=(event: ChangeEvent<HTMLInputElement>)=>{
    const actualValue=event.currentTarget.value;
    setValue(actualValue);
}
    return <><input onChange={onChange}/> -{value}</>
}
export const GetValueOfUncontrolledInputByButtonPress=()=> {
    const [value, setValue] = React.useState('');
    // return <><input id={'inputId'}/> <button onClick={(e)=>{
    //     const el = document.getElementById('inputId') as HTMLInputElement;
    //     setValue(el.value);
    // }}> так делать не надо
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value); //Так делать надо
    }
    return <><input ref={inputRef} id={'inputID'}/><button onClick={save}>save</button>- actual value: {value}</>
}

export const ControlledInput=()=> {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }
    const [parentValue, setParentValue] = React.useState('');
    return <input value={parentValue} onChange={onChange}/>
}



export const ControlledCheckBox=()=>{
    const [parentValue, setParentValue] = React.useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect=()=>{
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }
    const [parentValue, setParentValue] =
        React.useState<string | undefined>(undefined)
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option  value={'2'}>Moscow</option>
        <option  value={'3'}>Kiyv</option>
    </select>
}

export const ControlledInputWithFixedValue =()=> <input value={'it-l.com'}/>



