import {useState} from "react";

type PropsType={
    on: boolean
    onChange:(value: boolean)=>void
}
export  function OnOff_Controlled(props: PropsType){
console.log("onoff rendering")
    console.log('on:', props.on)
    const onStyle={
        width: '30px',
height: '20px',
        border: '1px solid red',
        display: "inline-block",
        padding: '2px',
        backgroundColor: props.on?"green":"white",
    }
    const offStyle={
        width: '30px',
        height: '20px',
        border: '1px solid red',
        display: "inline-block",
        marginLeft:'2px',
        padding: '2px',
        backgroundColor: props.on?"white":"red",




    }
    const indicatorStyle={
        width:'10px',
        height:'10px',
        borderRadius:'10px',
        border: '1px solid black',
        display: "inline-block",
        marginLeft:'5px',
        padding: '2px',
        backgroundColor: props.on?"green":"red",


    }
    return <div>
        {/*<div style={onStyle} onClick={()=>{setOn(true)}}>On</div>*/}
        {/*<div style={offStyle} onClick={()=>{setOn(false)}}>Off</div>*/}
        <div style={onStyle} onClick={()=>{props.onChange(true)}}>On</div>
        <div style={offStyle} onClick={()=>{props.onChange(false)}}>Off</div>
        <div style={indicatorStyle}></div>
    </div>
}