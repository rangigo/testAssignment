import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DeliverySummary from './DeliverySummary';

class App extends Component {
  render() {
    return (
      <div class="container">
      <h1>Orders</h1>
      <DeliverySummary />
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
    </div>
    );
  }
}

export default App;
