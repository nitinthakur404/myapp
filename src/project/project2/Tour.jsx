import React, { useState } from 'react'
import List from './List'
import Tourdata from './Tourdata'
import './index.css'

function Tour() {

    return (
        <div>
            <div className="main-container">
                <List tourdata={Tourdata} />
                {console.log(Tourdata,'main tour page')}
                {/* <button className=''>Refresh</button> */}
            </div>
        </div>
    )
}
export default Tour