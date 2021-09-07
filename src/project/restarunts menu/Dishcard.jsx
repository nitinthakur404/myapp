import React from 'react'
import { useState } from 'react'

const Dishcard = (props) => {
    console.log(props)
    return (
        <div className="dishcard">
            {props.data.map(value => {
                const { id, category, desc, img, price, title } = value;
                console.log(img)
                return (
                    <div key={id} className="main-dishcard">
                        <div className="leftside">
                            <img src={img}></img>
                        </div>
                        <div className="Rightside">
                            <div className="infoshow">
                                <h1>{title}</h1>
                                <p>{price}$</p>
                            </div>
                            <hr className="Hrline"></hr>
                            <div className="desc">
                                <p>{desc}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Dishcard;
