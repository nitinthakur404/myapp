import React, { createContext } from 'react'
import Contextchild1 from './Contextchild1'
export const Global = createContext()
export default function Maincontext() {
    return (
        <div>
            <Global.Provider value={{ appcolor: 'red' }}>
                <h1>main compnant</h1>
                <Contextchild1 />
            </Global.Provider>
        </div>
    )

}
