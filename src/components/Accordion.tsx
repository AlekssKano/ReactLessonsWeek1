import React from "react";
type AccordionProps = {
    title: string;
    value: number;
    collapsed: boolean;
}
export function Accordion1(props:AccordionProps){

       return( <div>
            <AccordionTitle title={props.title}/>

           { !props.collapsed  && <AccordionBody value={props.value}/>}
        </div>


       )
}
export function Accordion2(props:AccordionProps){
    if(props.collapsed) {
       return( <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody value={props.value}/>
        </div>
       )
    }
    else{
        return (
            <AccordionTitle title={props.title}/>

        );
    }

}
type AccordionTitleProps = {
    title: string;
}
export function AccordionTitle(props:AccordionTitleProps){
    return(
            <h3>{props.title}</h3>
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