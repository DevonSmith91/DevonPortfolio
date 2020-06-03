import React from 'react'
import '../CSS/Landing.css'
import Me from '../Images/Devon.jpg'
import { Link } from 'react-router-dom'

class Landing extends React.Component {
    render() {
        return (
            <div id='landingWrapper'>
                <div id='landingContainer'>
                    <h1>Hey! I'm Devon</h1>
                    <img id='devonPic' src={Me}></img>
                </div>
            </div>
        )
    }
}

export default Landing