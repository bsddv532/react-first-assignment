import React from 'react'
import './Style.css';

const FunctionComponent = () => {

  const styling = {
    color: "blue"
  }

  return (
    <div className='output1'>
      <h1>This is created using Functional <br /> Component</h1>
      <p>This is done using external CSS</p>
      <p style={styling}>This is done using inline CSS</p><br /><br />

    </div>
  )
}

export default FunctionComponent