import React, { Component } from 'react'
import axios from 'axios'
import Record from './Record'
export class DeliverySummary extends Component {
  state = {
    records: [],
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/orders')
      .then(res => this.setState({ records: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { records } = this.state
    console.log(records)
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Customer</th>
            <th scope="col">Date</th>
            <th scope="col">Is Delivered</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <Record {...record} index={i+1} />
          ))}
        </tbody>
      </table>
    )
  }
}

export default DeliverySummary
