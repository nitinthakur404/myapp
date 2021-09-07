import React, { useState } from 'react'
import Restaruntsmenudata from './Restaruntsmenudata'
import Menubutton from './Menubutton'
import Dishcard from './Dishcard'
import './index1.css'

export default function Restaruntsmenu(props) {

    const [dishes, setDishes] = useState(Restaruntsmenudata);

    const handleCLick = (category) => {
        if (category === 'All') {
            setDishes(Restaruntsmenudata);
            return;
        }
        setDishes(Restaruntsmenudata.filter(dish => (dish.category.toLowerCase()) === (category.toLowerCase())))
    }

    return (

        <div className="container">
            <div className="our_Menu">
                <h1>Our Menu</h1>
            </div>

            <div className="menu-button">
                <Menubutton onClick={handleCLick} />
            </div>

            <div className="dishcards">
                <Dishcard data={dishes} />
            </div>
        </div>

    )
}