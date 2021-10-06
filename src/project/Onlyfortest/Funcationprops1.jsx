import React from 'react'
import Funcationprops2 from './Funcationprops2'
export default function Funcationprops1() {
    function getdata(data){
console.log(data)
    }
    return (
        <div>
            <h1>Funcationprops1</h1>
            <Funcationprops2  info={getdata}/>
        </div>
    )
}



