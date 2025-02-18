import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./digitalClockView";
import {AnalogClockView} from "./analogClockView";

type PropsType={
mode?:'digital'|'analog'
}
export type ClockViewPropsType ={
    date:Date
}




export const Clock: React.FC<PropsType>=(props)=> {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const IntervalId = setInterval(() => {
            setDate(new Date());
            console.log("tick")
        }, 1000)
        return () => {
            clearInterval(IntervalId)
        }
    }, [])

    // const get2digitsString = (num: number) => num < 10 ? "0" + num : num

    // const secondsString = get2digitsString(date.getSeconds());
    // const minutesString = get2digitsString(date.getMinutes());
    // const hoursString = get2digitsString(date.getHours());
    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>

    }


    return <div>
        {/*{props.mode==='digital'? <> один вариант через тернарные*/}
        {/*    <span>{get2digitsString(date.getHours())}</span>*/}
        {/*:*/}
        {/*<span>{get2digitsString(date.getMinutes())}</span>*/}
        {/*:*/}
        {/*<span>{get2digitsString(date.getSeconds())}</span>*/}
        {/*   </> :<>ANALOG</>*/}
        {/*}*/}
        {view}
    </div>
}

