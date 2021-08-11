import React, { useState } from 'react'
import Accordion from './AccordionData.jsx'
import Accordionmenucard from './Accordionmenucard'
import './index.css'
function Accordionmenu() {
    const [data, setdata] = useState(Accordion)

    return (

        <div className="main-container" >
            <div className="container">

                <div className="heading-container">
                    <div className="heading-para">
                        <p >  Questions And Answers About Login</p>
                    </div>
                </div>
                <div className="QuestionsAnswer">
                    {data.map((datas) => {
                        return <Accordionmenucard key={datas.id} data={datas} />
                    })}
                </div>



            </div>
        </div>
    )
}



export default Accordionmenu