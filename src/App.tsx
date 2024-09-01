import React from 'react';
import './App.css';
import {Accordion1} from "./components/Accordion";
import {Rating} from "./Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff2} from "./components/OnOff/OnOff2";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";


function hello() {
    debugger
    alert('Hello World!');
}

//hello();
function App() {
    return (
        <div className="App">
            <PageTitle  title={"This is App Component"}/>
            {/*<UncontrolledRating value={3}/>*/}
            {/*<Accordion title={"How much marks?"} value={3}/>*/}
            {/*<PageTitle  title={"ToraDora"}/>*/}
            {/*<Accordion title={"How do you assess it?"} value={5}/>*/}

            <UncontrolledAccordion title={"Menu"} value = {3} />
            <UncontrolledAccordion title={"Users"} value = {3}/>
            <UncontrolledRating />
            <OnOff2 />

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

