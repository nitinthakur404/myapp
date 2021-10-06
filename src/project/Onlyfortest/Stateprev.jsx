import React, { useState } from 'react'
export default function Stateprev() {
    const [count, setcount] = useState(0)
    const [prevalue, setprevalue] = useState(0)
    let randvalue = Math.floor(Math.random() * 10 + 5)
    let message
    console.log(randvalue, 'rand')
    function updateHandler() {
        setcount((prev) => {
            console.log(prev, 'prev')
            setprevalue(prev)
            return randvalue + 1
        })
    }
    (prevalue >= 15) ? (message = "this is new home") : message = ''

    return (
        <div>
            <h1>value {count}</h1>
            {message}
            <br></br>
            <button onClick={updateHandler} >value update</button>
        </div>
    )
}
