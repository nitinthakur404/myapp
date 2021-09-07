import React, { useState, useMemo } from 'react'

function Usememocmo() {
    const [count, setcount] = useState(0)
    const [item, setitem] = useState(0)

    // console.log(item)
    // console.log(count)
    const multicountmemo = useMemo(function multicount() {
        console.log('Mulitcount')
        return count * 5
    }, [count])
    return (
        <div>
            <h2>useMemo hook in react</h2>
            <h1>count{count}</h1>
            <h1>item{item}</h1>
            <button onClick={() => { setcount(count + 1) }} >count update</button>
            <button onClick={() => { setitem(item + 1 * 5) }}>item update</button>
            <h1>multicount {multicountmemo}</h1>

        </div>
    )
}
export default Usememocmo