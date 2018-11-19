import React, { Component } from 'react'

export class DeliverySummary extends Component {
  state = {
    ordersArray: []
  }

  componentDidMount() {
    fetch('https://localhost:8000/orders')
      .then(res => res.json())
      .then(data => {
        this.setState({ordersArray: data})
        console.log(this.state.ordersArray);
        console.log('data', data);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default DeliverySummary
