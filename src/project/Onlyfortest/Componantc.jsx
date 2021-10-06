import React, { useContext } from 'react'
import { Secondcontext, Usercontext } from './ComponantO'


function Componantc() {
    const user = useContext(Usercontext)
    const user1 = useContext(Secondcontext)
    return (<h1>
        {user}-{user1}
    </h1>)
}

export default Componantc
