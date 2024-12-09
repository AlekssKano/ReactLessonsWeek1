import {useEffect, useState} from "react";
document.title = "My React App";


export const SimpleExample=()=>{
    const [counter,setCounter]=useState(1);
    const [fake,setFake]=useState(1);


    console.log('Simple example')

    // useEffect(()=> {
    //
    //     console.log('UseEffect every render' );
    //     document.title = counter.toString()})
    //api.getUsers().then("") - запрос на сервер
    //setInterval
    //indexedDB работа с базой данных
    //document.getElementId обращение к документу
    //document.title ="User" изминение чего-то
    // Все вышеперечисленное нельзя делать в компоненте, в редаксе, они должны быть чистыми!
    // НО! Если всё-таки нужно, то надо завернуть их callback пережанных в useEffect.
    // useEffect(()=> {
    //
    //     console.log('UseEffect only first  render (Copmponent DidMount' );
    //     document.title = counter.toString()}, [])
    useEffect(()=> {

        console.log('UseEffect only first  renderand every counter change' );
        document.title = counter.toString()}, [counter])



    return<>
        Hello, {counter} {fake}
        <button onClick={()=>setFake(fake+1)}> fake+ </button>
        <button onClick={()=>setCounter(counter+1)}> counter+ </button>
    </>
}