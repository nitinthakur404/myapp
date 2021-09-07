import React from 'react'
import { BrowserRouter as BR, Route, Link } from 'react-router-dom'
export default function Routing() {
    return (
        <BR>
            <Link to="/about">About</Link>
            <Link to="/">HOME</Link>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            {/* <About />
            <Contactus />
            <Gellery /> */}
        </BR>
    )
}

function Home() {

    return (
        <div>
            <h1>Home</h1>
            <p>this is home page</p>
        </div>
    )
} function About() {

    return (
        <div>
            <h1>About</h1>
            <p>this is About page</p>
        </div>
    )
}
function Contactus() {
    return (
        <div>
            <h1>Contactus</h1>
            <p>this is Contactus page</p>
        </div>
    )
}
function Gellery() {
    return (
        <div>
            <h1>Gellery</h1>
            <p>this is Gellery page</p>
        </div>
    )
}