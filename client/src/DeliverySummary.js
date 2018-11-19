import React, { Component } from 'react'
import axios from 'axios'
import Record from './Record'

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? '0' + s : s
  }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.')
}
export class DeliverySummary extends Component {
  state = {
    records: [],
  }

  sortDate = (a, b) => {
    function pad(s) {
      return s < 10 ? '0' + s : s
    }
    var d1 = new Date(a.Date)
    var d2 = new Date(b.Date)
    const diff = d1 - d2
    return diff > 0 ? 1 : diff === 0 ? 0 : -1
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/orders')
      .then(res =>
        this.setState({
          records: res.data
            .sort(this.sortDate)
            // .filer(el => (el.Customer ? el : null)),
        }),
      )
      .catch(err => console.log(err))
  }

  render() {
    const { records } = this.state
    console.log(records)
    return (
      <table className="table">
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
            <Record {...record} index={i + 1} key={record._id} />
          ))}
        </tbody>
      </table>
    )
  }
}

export default DeliverySummary
