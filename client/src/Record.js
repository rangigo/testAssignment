import React from 'react'

function convertDate(inputFormat) {
  function pad(s) {
    return s < 10 ? '0' + s : s
  }
  var d = new Date(inputFormat)
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.')
}

function Record({ index, Customer, Date, IsDelivered, Value }) {
  console.log('Customer :', Customer)
  const render = Customer ? (
    <tr>
      <th scope="row">{index}</th>
      <td>{Customer}</td>
      <td>{convertDate(Date)}</td>
      <td>{IsDelivered ? 'True' : 'False'}</td>
      <td>{Value}</td>
    </tr>
  ) : null
  return render
}

export default Record
