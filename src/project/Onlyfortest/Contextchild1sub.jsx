import React, { useContext } from 'react'
import { Global } from './Maincontext'
export default function Contextchild1sub() {
    let { appcolor } = useContext(Global)
    console.log(appcolor)
    return (
        <div>
            <h1 style={{ color: appcolor  }}>super child</h1>
        </div>
    )
}
