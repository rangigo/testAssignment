import React, { Component } from 'react'
import axios from 'axios'
export class DeliverySummary extends Component {
  state = {
    ordersArray: [],
  }

  componentDidMount() {
    axios.get('http://localhost:8000/orders')
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  render() {
    return <div />
  }
}

export default DeliverySummary
