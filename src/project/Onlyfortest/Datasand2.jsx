import React from 'react'

export default function Datasand2(props) {
    // console.log(props.info)
    let name = "nitn"

    let nodata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            <h1>this is for react data sand test</h1>
            <button onClick={() => { props.info(nodata) }}>click</button>
        </div>
    )
}
