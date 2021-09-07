import React from 'react'
import { Link } from 'react-router-dom'
export default function Nav() {
    return (
        <div>

            <Link to="/"exc>Home</Link>
            <br></br>
            <Link to="/about">About</Link>
            <br></br>
            <Link to="/countactus">Contact us</Link>
        </div>
    )
}
