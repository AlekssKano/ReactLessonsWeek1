import React from "react";
type AccordionCollapsedType= true |false;

type itemType={
    title:string
    value: any
}
type AccordionProps = {
    title: string;
    value: number;
    collapsed: boolean;
    onChange:()=>void;
    items: itemType[]
    onClick:(value:any)=>void


}

export function Accordion1(props:AccordionProps){

       return( <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>

           { !props.collapsed  && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>


       )
}
// export function Accordion2(props:AccordionProps){
//     if(props.collapsed) {
//        return( <div>
//             <AccordionTitle title={props.title}/>
//             <AccordionBody value={props.value}/>
//         </div>
//        )
//     }
//     else{
//         return (
//             <AccordionTitle title={props.title}/>
//
//         );
//     }
//
// }
type AccordionTitleProps = {
    title: string;
    onChange:()=>void;

}
export function AccordionTitle(props:AccordionTitleProps){
    return(<div>


            <h3 onClick={(event )=> props.onChange()}>{props.title}</h3>
               </div>
    );
}

type AccordionBodyProps = {
    items:itemType[]
    onClick:(value:any)=>void
}

export function AccordionBody(props:AccordionBodyProps){
    console.log("AccordionBody rendering");

   return <ul>
       {props.items.map((i, index)=> <li onClick={()=>{props.onClick(i.value)}}key={index} >{i.title}</li>)}
   </ul>
}