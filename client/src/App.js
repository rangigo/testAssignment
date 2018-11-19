import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import DeliverySummary from './DeliverySummary'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Orders</h1>
        <DeliverySummary />
      </div>
    )
  }
}

export default App
