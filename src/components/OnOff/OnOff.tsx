import styled from "styled-components";
import React from "react";
import {type} from "node:os";

type turnCheck = {
    on: boolean
}
type ButtonPropsType ={
    on: boolean;
}
type ColorPropsType ={
    color: string
}
export function OnOff(props: turnCheck) {
    return (
        <div>
            <Button on={props.on}/>


        </div>
    )
}
const Lighter = styled.div<ColorPropsType>`
    background-color: ${(props) => props.color};
    width: 10px;
    height: 10px;
    margin: 1em auto;
    border-radius: 50%;
`


export function Button(props: ButtonPropsType) {

    if (props.on) {
        return <ButtonWrapper>
            <ButtonColor color={'green'}><b>On</b></ButtonColor>
            <button>Off</button>
            <Lighter color={'green'}/>
        </ButtonWrapper>
    } else {
        return <ButtonWrapper>
            <button>On</button>
            <ButtonColor color={'red'}><b>Off</b></ButtonColor>
            <Lighter color={'red'}/>
        </ButtonWrapper>
    }

}
const ButtonColor = styled.button<ColorPropsType>`
    background-color: ${(props) => props.color};
    
`

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
`