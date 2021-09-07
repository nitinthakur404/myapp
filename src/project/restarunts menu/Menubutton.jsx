import React, { useState } from 'react'

function Menubutton({ onClick }) {
    const foodcategory = ['All', 'Breakfast', 'Lunch', 'Shakes']

    return (
        <div className="menubutton-maincontainer">
            {
                foodcategory.map((value, index) => {

                    return (

                        <button key={index} className="menubutton" onClick={() => onClick(value)}>{value}</button>

                    )
                })
            }
        </div>
    )
}

export default Menubutton