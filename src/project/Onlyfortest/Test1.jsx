import React from 'react'
import { Route, Link } from 'react-router-dom'
import Nav from './Nav'

export default function Test1() {
    return (
        <div>
            <Nav />
            <Route path="/about"><About /></Route>
            <Route path="/" exact={true}><Home /></Route>
            <Route path="/countactus"><Countactus /></Route>
        </div>
    )
}

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <h5>This is Home page</h5>
        </div>
    )
}
function About() {
    return (
        <div>
            <h1>About </h1>
            <h5>this is  About page</h5>
        </div>
    )
}

function Countactus() {
    return (
        <div>
            <h1>Countactus</h1>
            <h5>this is Countactus page</h5>
        </div>
    )
}