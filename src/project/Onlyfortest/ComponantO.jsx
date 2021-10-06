import React, { createContext } from 'react'
import ComponantA from './ComponantA'
export const Usercontext = createContext()
export const Secondcontext = createContext()

function ComponantO() {
    return (
        <div>
            <Usercontext.Provider value={'nitin'}>
                <Secondcontext.Provider value={'kumar'}>
                    <ComponantA />
                </Secondcontext.Provider>
            </Usercontext.Provider>

        </div>
    )
}

export default ComponantO
