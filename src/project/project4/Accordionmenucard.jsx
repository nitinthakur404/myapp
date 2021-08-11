import react, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import React from 'react'
import './index.css'


const Accordionmenucard = (props) => {
    const [showInfo, setshowInfo] = useState(false)
    const { title, info } = props.data

    return (

        <div className="Questions-Answers-subcontainer" >
            <div className="Questions ">
                <p>
                    {title}
                    {/* this is not in the action */}
                </p>

                <button className="button" onClick={() => {
                    console .log(showInfo,1)
                    setshowInfo(!showInfo)
                }

                } >{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }</button>
                {console.log(showInfo,2)}
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

