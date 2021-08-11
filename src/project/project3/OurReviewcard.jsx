import React, { useState } from 'react'

function OurReviewcard(props) {
    let Reviewsdata = props.Reviewsdata

    const [index, setindex] = useState(0)
    const { image, name, job, details } = Reviewsdata[index]
    // console.log(Reviewsdata[index])
    const checkno = (number) => {
        if (number > Reviewsdata.length - 1) {
            console.log(index, '>')
            return 0
        }
        if (number < 0) {
            console.log(number, index)
            return Reviewsdata.length - 1
        }
        console.log(number, Reviewsdata.length - 1)
        return number
    }
    checkno()
    function nextperson() {
        setindex((index) => {
            let newindex = index + 1
            return checkno(newindex)

        })
    }
    function prevperson() {
        setindex((index => {
            let newindex = index - 1
            return checkno(newindex)
        }))
    }
    function randomno() {
        setindex(Math.floor((Math.random() * Reviewsdata.length) + 0));
        console.log(index)
    }

    return (<>

        <div className="Reviewcard-main-container">
            <div className="innercircle"></div>
            <div className="outercircle">
                <img src={image} className="images" alt="imag" /></div>
            <p className="Names">{name}</p>
            <p className="jobs">{job}</p>
            <p className="Details">{details}</p>
            <div className="button">

                <button className="Rightbutton" onClick={() => {
                    nextperson()
                }} >
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 320 512" color='#8bcbf9' height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.4z"></path></svg> </button>


                <button className="Leftbutton" onClick={() => {
                    prevperson()
                }}
                >
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 320 512" height="1.5em" color='#8bcbf9' width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
                </button>
            </div>
            <button className="surpriceME" onClick={() => { randomno() }}>surprice me</button>
        </div>

    </>)

}

export default OurReviewcard


