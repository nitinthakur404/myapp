import React, { useRef } from 'react'
import Reffunctionb from './Reffunctionb'

export default function Reffunction() {
    let inputref = useRef()
    function refhandler() {
        inputref.current.style.color = "red"
    }
    return (
        <div>
            <Reffunctionb ref={inputref} />
            <button onClick={() => { refhandler() }}>click</button>
        </div>
    )
}
