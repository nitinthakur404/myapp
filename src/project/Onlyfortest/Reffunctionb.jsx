import React, { forwardRef } from 'react'

 function Reffunctionb(props, ref) {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}
export default forwardRef(Reffunctionb)