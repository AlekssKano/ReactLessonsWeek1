import React, {memo, useMemo, useState} from 'react';
import {usersType} from "./ReactMemo.stories";
import {Select} from "../components/select/Select";

export default {
    title: 'UseMemoSelect'
}
type cityType={
    title:string
    country:string
    id:string
}

export const SelectMemo = () => {
    const itemsArray: cityType[] = [
        {title: 'Adelaide', country: "Australia", id: '1'},
        {title: 'Tokio', country: "Japan", id: '2'},
        {title: 'London', country: "UK", id: '3'},
        {title: 'Okinawa', country: "Japan", id: '4'},
        {title: 'Darwin', country: "Australia", id: '5'},
        {title: 'Kyoto', country: "Japan", id: '6'},
        {title: 'Sheffield', country: "UK", id: '7'},
        {title: 'Leeds', country: "UK", id: '8'}
    ];

    let onlyJapancityes=useMemo(()=>{
        return itemsArray.filter(el=>el.country==="Japan")},[itemsArray])

let citiesWithE=useMemo(()=>{
    return itemsArray.filter(el=>el.title.toLowerCase().indexOf("e") > -1);},[itemsArray])

    return (<>
            All Cities
            <select>
                {itemsArray.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.country} - {city.title}
                    </option>
                ))}
            </select>
            Japan only
            <select>
                {onlyJapancityes.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.country} - {city.title}
                    </option>
                ))}
            </select>
            cities WithOut E
            <select>cities WithOut E
                {citiesWithE.map((city) => (
                    <option key={city.id} value={city.id}>
                        {city.country} - {city.title}
                    </option>
                ))}
            </select>
        </>
    );
}