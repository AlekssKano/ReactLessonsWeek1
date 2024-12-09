import {useEffect, useState} from "react";

export default {
    title: "useEffect demo",
}
export const SimpleExample=()=>{
    const [counter,setCounter]=useState(1);
    const [fake,setFake]=useState(1);


    console.log('Simple example')

    useEffect(()=> {

        console.log('UseEffect every render' );
        document.title = counter.toString()})
        //api.getUsers().then("") - запрос на сервер
        //setInterval
        //indexedDB работа с базой данных
        //document.getElementId обращение к документу
        //document.title ="User" изминение чего-то
        // Все вышеперечисленное нельзя делать в компоненте, в редаксе, они должны быть чистыми!
        // НО! Если всё-таки нужно, то надо завернуть их callback пережанных в useEffect.
    useEffect(()=> {

        console.log('UseEffect only first  render (Copmponent DidMount' );
        document.title = counter.toString()}, [])
    useEffect(()=> {

        console.log('UseEffect only first  renderand every counter change' );
        document.title = counter.toString()}, [counter])



    return<>
    Hello, {counter} {fake}
        <button onClick={()=>setFake(fake+1)}> fake+ </button>
        <button onClick={()=>setCounter(counter+1)}> counter+ </button>
    </>
}
export const SetTimeOutExample=()=>{
    const [counter,setCounter]=useState(1);
    const [fake,setFake]=useState(1);


    console.log('SetTiomeoutExample')
    useEffect(() => {
        setInterval(()=>{
            console.log("setInterval")
            setCounter((state)=>state+1)},1000)
    }, []);



    return<>
        Hello, counter: {counter} fake: {fake}
        {/*<button onClick={()=>setFake(fake+1)}> fake+ </button>*/}
        {/*<button onClick={()=>setCounter(counter+1)}> counter+ </button>*/}
    </>
}
export const SetClock=()=>{
    const [counter,setCounter]=useState(1);
    const [fake,setFake]=useState(1);

let date = new Date();
const [second,setSeconds]=useState<number>(date.getSeconds());
const[minute,setMinute]=useState<number>(date.getMinutes());
const[hour,setHour]=useState<number>(date.getHours());
    console.log('SetTiomeoutExample')
    useEffect(() => {
        setInterval(()=>{
            console.log("setSecondInterval")
            setSeconds((state)=>state+1)},1000)
        setInterval(()=>{
            console.log("setMinuteInterval")
            setMinute((state)=>state+1)},60000)
        setInterval(()=>{
            console.log("setHourInterval")
            setHour((state)=>state+1)},3600000)
    }, []);

if(second==60){
    setSeconds(0)
}if(minute==60){
    setSeconds(0)
}if(hour==12){
    setSeconds(0)
}

    return<>
        Timing, {hour}:{minute}:{second}
        {/*<button onClick={()=>setFake(fake+1)}> fake+ </button>*/}
        {/*<button onClick={()=>setCounter(counter+1)}> counter+ </button>*/}
    </>
}
export const SetClock2=()=>{
    const [counter,setCounter]=useState(1);
    const [fake,setFake]=useState(1);

    let date = new Date();
    const [second,setSeconds]=useState<number>(date.getSeconds());
    const[minute,setMinute]=useState<number>(date.getMinutes());
    const[hour,setHour]=useState<number>(date.getHours());
    console.log('SetTiomeoutExample')
    useEffect(() => {
        setInterval(()=>{
            console.log("setSecondInterval")
            setSeconds((state)=>state+1)},1000)
    }, []);

    if(second==60){
        setSeconds(0)
        setMinute(minute+1)
    }if(minute==60){
        setMinute(0)
        setHour(hour+1)
    }if(hour==24){
        setHour(0)
    }

    return<>
        Timing, {hour}:{minute}:{second}
        {/*<button onClick={()=>setFake(fake+1)}> fake+ </button>*/}
        {/*<button onClick={()=>setCounter(counter+1)}> counter+ </button>*/}
    </>
}