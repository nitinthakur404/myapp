
import React, { useState } from 'react'
import List from './List'
import Sdata from './Sdata'
import './index.css'
function Birthdaycard() {
    const [people, setpeople] = useState(Sdata)
    let lengathOfarray = people.length
    console.log(lengathOfarray)
    return (
        <div className="bigcontainer">
            <h1 className="upperheading"> No of Birthday today {lengathOfarray}</h1>
            <List people={people} />
            <button className="button" onClick={() => { setpeople([]) }}>cearl all</button>
        </div>
    )
}
export default Birthdaycard