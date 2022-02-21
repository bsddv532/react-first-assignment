import React, { Component } from 'react'
import './Style.css'


const styling = {
    color: "blue",
}

class ClassComponent extends Component {
    render() {
        return (
            <div className='output2'>
                <h1>This is created using Class <br /> Component </h1>
                <p>This is done using external CSS</p>
                <p style={styling}>This is done using inline CSS</p><br /><br />
            </div>
        )
    }
}

export default ClassComponent