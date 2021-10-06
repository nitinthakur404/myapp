import React, { useContext } from 'react'
import Contextchild1sub from './Contextchild1sub'
import { Global } from './Maincontext'
export default function Contextchild1() {
    let { appcolor } = useContext(Global)
    console.log(appcolor)
    return (
        <div>
            <h1 style={{ color: appcolor }}>my name is nitin</h1>
            <Contextchild1sub />
        </div>
    )
}
