import {reducer, StateType, TOGGLE_CONSTANT} from "./reducer";

export const a=2

test('reducer converted to opposite value',()=>{

//data
    const state:StateType={
        collapsed:false
    }
    ///action
    const newState =reducer(state,{type:TOGGLE_CONSTANT})

expect(newState.collapsed).toBe(true)
})
test('collapsed should be falls',()=>{

//data
    const state:StateType={
        collapsed:true
    }
    ///action
    const newState =reducer(state,{type:TOGGLE_CONSTANT})

expect(newState.collapsed).toBe(false)
})
test('check Error',()=>{

//data
    const state:StateType={
        collapsed:true
    }
    ///action
    expect(()=> { //проверить функцию на выполнение
        reducer(state, {type: "FakeType"})
    }).toThrowError()

})