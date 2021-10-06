import React, { useState } from 'react'
import Mouseposition from './Mouseposition'
export default function Hookcontainer() {
    const [display, setdisplay] = useState(true)

    return (
        <div>
            <button onClick={() => { setdisplay(!display) }}>togggle</button>
            {display && <Mouseposition />}
        </div>
    )
}
