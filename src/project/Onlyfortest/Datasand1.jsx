
import React, { useState } from 'react'
import Datasand2 from './Datasand2'
export default function Datasand1() {
    const [state, setstate] = useState(1)




    function infodata(data) {
        setstate(data.filter((value) => value>=1))
    }
    return (
        <div>
            <h1>data sand Test0</h1>
            <Datasand2 info={(infodata)} />
           
            <h1>{state}</h1>

        </div>
    )
}
