import {memo, useMemo, useState} from "react";

export default {
    title:'UseState demo'
}

function generateData(){
    console.log('generateData')
    return 1
}
export const Example1 = () => {
    console.log("Example1")

    const InitialValue=useMemo(generateData, [])
    const [counter, setCount] = useState(generateData)

    const changer =(state:number)=>state+1

    return <>
        <button onClick={() => {
            setCount(changer)
        }}>+
        </button>
        {counter}
    </>
}