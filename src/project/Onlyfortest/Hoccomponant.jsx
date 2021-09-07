import React, { useState } from 'react'

export default function Hoccomponant() {
    return (
        <div>
            <Hocred data={Counter} />
            <Hocgreen data={Counter} />
            <Hocblue data={Counter} />
            <Hocyellow data={Counter} />
        </div>
    )
}
function Hocred(props) {
    return (
        <div >
            <h1 style={{ backgroundColor: 'red', width: 100, height: 100 }}><props.data /></h1>
        </div>)
}
function Hocgreen(props) {
    return (
        <div >
            <h1 style={{ backgroundColor: 'green', width: 100, height: 100 }}><props.data /></h1>
        </div>)
}
function Hocblue(props) {
    return (
        <div >
            <h1 style={{ backgroundColor: 'blue', width: 100, height: 100 }}><props.data /></h1>
        </div>)
}
function Hocyellow(props) {
    return (
        <div >
            <h1 style={{ backgroundColor: 'yellow', width: 100, height: 100 }}><props.data /></h1>
        </div>)
}


function Counter() {
    const [count, setcount] = useState(0)
    return (
        <div>
            <h5>{count}</h5>
            <button onClick={() => { setcount(count + 1) }}>click</button>
        </div>
    )
}