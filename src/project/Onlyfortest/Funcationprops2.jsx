import React     from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

export default function Funcationprops2(props) {
    let name = 'nitin'
    return (
        <div>
            <h1> Funcationprops2</h1>
            <button onClick={() => { props.info(name) }}>click</button>
        </div>
    )
}
    