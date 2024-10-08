import React from "react";

type RatingProps ={
    value: RatingValueType
    onClick: (value: RatingValueType) => void

}
type StarPropsType ={
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}
export type RatingValueType = 0|1|2|3|4|5;
function Star(props: StarPropsType) {
    console.log("Star rendering")
    return <span onClick={()=>{props.onClick(props.value)}}>{props.selected ? <b>Star </b>: "Star "}</span>
    // if (props.selected) {
    //     return <span><b>Star    </b></span>
    // } else {
    //     return <span>Star </span>
    // }


}

export function Rating(props: RatingProps) {


        return (
            <div>
                <Star selected={props.value >0} onClick={props.onClick} value={1}/>
                <Star selected={props.value >1} onClick={props.onClick} value={2}/>
                <Star selected={props.value >2} onClick={props.onClick} value={3}/>
                <Star selected={props.value >3} onClick={props.onClick} value={4}/>
                <Star selected={props.value >4} onClick={props.onClick} value={5}/>
            </div>

        )


}
// export function Rating1(props: RatingProps) {
//     if (props.value === 0) {
//         return (
//             <div>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>
//
//         )
//     }
//     if (props.value === 1) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>
//
//         )
//     }
//     if (props.value === 2) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>
//
//         )
//     }
//     if (props.value === 3) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//                 <Star selected={false}/>
//             </div>
//
//         )
//     }
//     if (props.value === 4) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={false}/>
//             </div>
//
//         )
//     }
//
//     if (props.value === 5) {
//         return (
//             <div>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//                 <Star selected={true}/>
//             </div>
//
//         )
//     }
//     return (
//         <div>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//             <Star selected={false}/>
//         </div>
//     )
// }