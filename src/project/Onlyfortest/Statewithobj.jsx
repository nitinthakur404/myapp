import React, { useReducer } from 'react'

const initialState = {
    firstvalue: 0,
    secondvalue: 10
}
const reducer = (state, action) => {
    console.log(action)
    console.log(state.firstvalue)
    switch (action.type) {
        case 'increment':
            return { ...state, firstvalue: state.firstvalue + action.value }
        case 'decrement':
            return { ...state, firstvalue: state.firstvalue - 1 }

        case 'increment2':
            return { ...state, firstvalue: state.firstvalue + 2 }
        case 'decrement2':
            return { ...state, firstvalue: state.firstvalue - 2 }

        case 'increment10':
            return { ...state, secondvalue: state.secondvalue + 10 }
        case 'decrement10':
            return { ...state, secondvalue: state.secondvalue - 10 }


        case 'reset':
            return initialState
        default:
            return state
    }
}
export default function Statewithobj() {
    const [count, dispatch] = useReducer(reducer, initialState)
    console.log(dispatch)
    return (
        <div>
            <h1>{count.firstvalue}</h1>
            <h1>{count.secondvalue}</h1>
            <button onClick={() => { dispatch({ type: 'increment', value: 5 }) }}>Increment</button>
            <button onClick={() => { dispatch({ type: 'decrement' }) }}>Decrement</button>

            <button onClick={() => { dispatch({ type: 'increment2' }) }}>Increment2</button>
            <button onClick={() => { dispatch({ type: 'decrement2' }) }}>Decrement2</button>

            <button onClick={() => { dispatch({ type: 'increment10' }) }}>Increment10</button>
            <button onClick={() => { dispatch({ type: 'decrement10' }) }}>Decrement10</button>

            <button onClick={() => { dispatch({ type: 'reset' }) }}>reset</button>
        </div>
    )
}
