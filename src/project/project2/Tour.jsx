import React,{useState} from 'react'
import List from './List'
import Tourdata from './Tourdata'
import './index.css'

function Tour() {
    return (
        <div>
            <div className="main-container">
                <List tourdata={Tourdata} />
                {/* <button className=''>Refresh</button> */}
            </div>
        </div>
    )
}
export default Tour