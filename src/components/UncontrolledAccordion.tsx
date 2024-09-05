import React from "react";
type AccordionProps = {
    title: string;
    value: number;

}
export function UncontrolledAccordion(props:AccordionProps){
console.log("UncontrolledAccordion rendering");

    let [collapsed, setCollapsed] = React.useState(false);
       return( <div>
            <AccordionTitle title={props.title} onClick={()=>setCollapsed(!collapsed)}/>
               {/*<button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>*/}
           { !collapsed  && <AccordionBody value={props.value}/>}
        </div>


       )
}

type AccordionTitleProps = {
    title: string;
    onClick: ()=>void
}
export function AccordionTitle(props:AccordionTitleProps){
    return(
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    );
}

type AccordionBodyProps = {
    value: number;
}

export function AccordionBody(props:AccordionBodyProps){
    console.log("AccordionBody rendering");
   if (props.value === 1) return(
            <ul>
                <li>1</li>

            </ul>


    )
    if (props.value === 2) return(
        <ul>
            <li>1</li>
            <li>2</li>
        </ul>


    )
    if (props.value === 3) return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>


    )
    if (props.value ===  4) return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>


    )
    if (props.value === 5) return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>


    )
    return (
        <div>
            <ul>
                <li>HaHaHa</li>
            </ul>
        </div>
    )
}