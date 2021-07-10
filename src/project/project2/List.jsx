import React, { useState, useEffect } from 'react'


export default function List(props) {
    const [tourdata, settourdata] = useState(props.tourdata)
    const [refresh, setrefresh] = useState()

    function notintrested(getindex) {
        settourdata(tourdata.filter((value, index) => index !== getindex))
    }
    return (
        <div className="maincontainer">
            {(tourdata.length <= 0) ?
                <div className="turepart">
                    <h1>no tour</h1>
                    <button className="refreshButton" onClick={() => { settourdata(props.tourdata) }}>refresh</button>
                </div>
                : <h1 className="OURTOUR">This is our tour</h1>}

                
            {
                tourdata.map((Tourdetails, index) => {
                    console.log(Tourdetails)
                    return <div key={Tourdetails.id}>
                        <div className="container" >
                            <img className="image" src={Tourdetails.image} alt='image1'></img>
                            <div className="container-2">

                                <div className="details-1">
                                    <h6 className="tourpackagedetails">{Tourdetails.details}</h6>
                                    <p className="price">	<span>&#8377;</span><span></span>  {Tourdetails.price}</p>
                                </div>
                                <div className="details-2">
                                    <p className="completeDetails">
                                        {Tourdetails.info}
                                    </p>
                                    <button onClick={() => { notintrested(index) }} className='buttonnotintrested'>not intrested</button>
                                </div>
                            </div>
                        </div>

                    </div>
                })
            }

        </div>

    )
}
