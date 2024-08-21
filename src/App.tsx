import React from 'react';
import './App.css';
import {Accordion1} from "./components/Accordion";
import {Rating} from "./Rating/Rating";


function hello() {
    debugger
    alert('Hello World!');
}

//hello();
function App() {
    return (
        <div>
            <PageTitle  title={"This is App Component"}/>
            {/*<Rating value={3}/>*/}
            {/*<Accordion title={"How much marks?"} value={3}/>*/}
            {/*<PageTitle  title={"ToraDora"}/>*/}
            {/*<Accordion title={"How do you assess it?"} value={5}/>*/}

            <Accordion1 title={"Menu"} value = {3} collapsed={true}/>
            <Accordion1 title={"Users"} value = {3} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

export default App;


type PadeTitlePopsType={
    title: string
}
function PageTitle(props: PadeTitlePopsType) {
    console.log("PageTitle rendering")
    return( <h1>{props.title}</h1>
    )
}

