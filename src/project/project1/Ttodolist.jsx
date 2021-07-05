// import { getDefaultNormalizer } from '@testing-library/react'
import React, { useState } from 'react'

export default function Test1() {
    const todolist = []
    const [dataOnChange, setdataOnChange] = useState("")
    const [item, setitem] = useState(todolist)
    const [edititemshow, setedititemshow] = useState('')
    function inputhandler(e) {
        setdataOnChange(e.target.value)
    }
    function addclickhandler() {
        setitem((olditem) => {
            return [...olditem, dataOnChange]
        })
        console.log('add')
    }
    function removeFilterData(getdata) {
        let filterResult = item.filter((filterdata, index) => index !== getdata
        )
        setitem(filterResult)
    }
    function okButtonhandler(value, index) {
        console.log('okbuttonHanduler')
        setedititemshow(false)

    }
    function Editbutton(value, index) {
        console.log(value, index)
        // setedititemshow(true)
        console.log(edititemshow)
    }

    return (
        <div>
            <div className="bigcontainer">
                <h1 className="todolist">TodoList</h1>
                <div className="container">
                    <input className="input-Box" onChange={inputhandler} type="text" />
                    <button className='Button-Add' onClick={() => { addclickhandler() }}>Add</button>
                </div>

                <div className="container2">
                    {item.map((value, index) => {
                        return <div className="show-Data" key={index}>
                            <p className='p-text' >{value}</p>


                            {edititemshow ? <div className="">
                                <input className="editInutbox"></input>
                                <button onClick={() => { okButtonhandler(value, index) }}>ok</button>
                            </div> : null}



                            <div className="button-left-side">
                                <button className="Button-Remove" onClick={() => { removeFilterData(index) }} >remove</button>

                                <button className="Button-Edit"
                                    onClick={() => { Editbutton(value, index) }} >edit</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
