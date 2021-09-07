import React, { useState } from 'react'

function Controlled() {
    const [val, setval] = useState('');
    const [item, setitem] = useState('')
    const [data, setdata] = useState('')
    console.log(val, '1')
    console.log(item, '2')
    console.log(data, '3    ')
    return (
        <div>
            <input type="text" value={val} onChange={(e) => { setval(e.target.value) }} />
            <input type="text" value={item} onChange={(e) => { setitem(e.target.value) }} />
            <input type="text" value={data} onChange={(e) => { setdata(e.target.value) }} />
            <h3>value{val}</h3>
            <h4>item{item}</h4>
            <h5>data{data}</h5>
        </div>
    )
}
export default Controlled