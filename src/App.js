// import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import './components/Style.css'
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';



class App extends Component {
  constructor() {
    super();

    this.state = {
      output1: false,
      output2: false
    }
  }


  render() {
    return (
      <div className="App">
        <p id='heading'>Styling Using Functional and Class Component</p>

        <button className='button' onClick={() => this.setState({ output1: !this.state.output1 })}>To see styling in functional component</button>

        <button className='button' onClick={() => this.setState({ output2: !this.state.output2 })}>To see styling in class component</button>

        { this.state.output1 ? <FunctionComponent /> : null }

        { this.state.output2 ? <ClassComponent /> : null }
      </div>
    )
  }
}

export default App









