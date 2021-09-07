import React, { createRef } from 'react';

class Refclass extends React.Component {
    constructor() {
        super()
        this.inputref = createRef()
    }
    getval() {
        console.warn(this.inputref.current.value)
        this.inputref.current.style.color = "red"
        this.inputref.current.style.backgroundColor = "green"
    }

    render() {
        return (
            <div className="Classref">
                <h1>this is class Refclass</h1>
                <input type="text" ref={this.inputref} />
                <button onClick={() => { this.getval() }}> click</button>
            </div>
        )
    }
}
export default Refclass