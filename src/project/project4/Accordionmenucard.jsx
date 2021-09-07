import react, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import React from 'react'
import './index.css'


const Accordionmenucard = (props) => {
    const [showInfo, setshowInfo] = useState()
    const { title, info } = props.data

    return (

        <div className="Questions-Answers-subcontainer" >
            <div className="Questions ">
                <p>
                    {title}
                </p>

                <button className="button" onClick={() => {
                    setshowInfo(!showInfo)
                }


                } >{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }</button>
            </div>
            <div className="Answers ">
                {showInfo && <p>{info}</p>}
            </div>
        </div>
    )
}
export default Accordionmenucard
{/* {
   
} */}

