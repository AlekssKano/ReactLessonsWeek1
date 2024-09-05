import React, {useState} from 'react';
import './App.css';
import {Accordion1} from "./components/Accordion";
import {Rating, RatingValueType} from "./Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff2} from "./components/OnOff/OnOff2";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/uncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff2} from "./components/uncontrolled_OnOff/uncontrolledOnOff2";


function hello() {
    debugger
    alert('Hello World!');
}

//hello();
function App() {

    let [ratingValue, setRating] = useState<RatingValueType>(0);
    let[accordionCollapsed, setAccordionCollapsed] = React.useState(false);
    let [switchOn, setswitchOn] = React.useState(false);
    return (
        <div className="App">
            <PageTitle  title={"This is App Component"}/>
            {/*<UncontrolledRating value={3}/>*/}
            {/*<Accordion title={"How much marks?"} value={3}/>*/}
            {/*<PageTitle  title={"ToraDora"}/>*/}
            <Accordion1 title={"How do you assess it?"}
                        value={5} collapsed={accordionCollapsed}
                        onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>

            {/*<UncontrolledAccordion title={"Menu"} value = {3} />*/}
            {/*<UncontrolledAccordion title={"Users"} value = {3}/>*/}
            {/*<UncontrolledRating />*/}
            <Rating value={ratingValue} onClick={setRating}/>
            {/*<OnOff2 on={switchOn} onChange={(on)=>{setswitchOn(on)}}/>*/}
            <UncontrolledOnOff2 onChange={setswitchOn}/> {switchOn.toString()}

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

