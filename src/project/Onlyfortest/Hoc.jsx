import React from 'react'
import { useState } from 'react'

export default function Hoc() {
    return (
        <div>
            <Cmored data={Counter} />
            <Cmogreen data={Counter} />

        </div>
    )
}
function Cmogreen(props) {
    return <h1 style={{ backgroundColor: 'green', width: '100px' }} > <props.data /></h1>
}

function Cmored(props) {

    return <h1 style={{ backgroundColor: 'red', width: '100px' }}  > <props.data /></h1>
}



function Counter() {
    const [count, setcount] = useState(0)
    return (
        <h1>
            <h1>{count}</h1>
            <button onClick={() => { setcount(count + 1) }}> update </button>
        </h1>
    )
}