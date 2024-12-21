import React, {forwardRef, useEffect, useState} from "react";

type PropsType={

}



export const Clock: React.FC<PropsType>=(props)=>{
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        const IntervalId= setInterval(()=>{setDate(new Date());
            console.log("tick")},1000)
        return ()=>{
            clearInterval(IntervalId)
        }
    },[])

    const get2digitsString=(num:number)=>num<10?"0"+num:num

    // const secondsString = get2digitsString(date.getSeconds());
    // const minutesString = get2digitsString(date.getMinutes());
    // const hoursString = get2digitsString(date.getHours());
    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>


    </div>
}
