import React, { useEffect, useState } from 'react'

export default function Mouseposition() {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    function Mousehook(e) {
        console.log('mouse event')
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        // console.log('useeffect')
        window.addEventListener('mousemove', Mousehook
        )
        return () => {
            console.log("object value") 
               window.removeEventListener('mousemove', Mousehook
        )
        }
            ;

    })
    return (
        <div>
            <h1>
                X and y positions
            </h1>
            <h1>
                X position {x} <br></br>
                y position {y}
                <br></br>

            </h1>
        </div>
    )
}
