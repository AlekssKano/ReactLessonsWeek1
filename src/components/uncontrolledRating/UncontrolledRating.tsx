import React from "react";
type RatingProps={
    value: number
}

type StarPropsType ={
    selected: boolean
    value: 1|2|3|4|5
    setValue: (value: 1|2|3|4|5)=>void
}
function Star(props: StarPropsType) {
    console.log("Star rendering")
    //
    return <span onClick={()=>{props.setValue(props.value)}}>
        {props.selected ?<b>Star </b>: "Star "}
    </span>
    // return props.selected ? <span><b>Star</b></span> : <span>Star</span>;
    // if (props.selected) {
    //     return <span><b>Star</b></span>
    // } else {
    //     return <span>Star</span>
    // }


}

export function UncontrolledRating() {
let [value, setValue] = React.useState(0)

        return (
            <div>
                <Star selected={value >0} setValue={setValue} value={1}/>
                <Star selected={value >1} setValue={setValue} value={2}/>
                <Star selected={value >2} setValue={setValue} value={3}/>
                <Star selected={value >3} setValue={setValue} value={4}/>
                <Star selected={value >4} setValue={setValue} value={5}/>
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