import React from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Orders = () => {
  return (
    <div className='container text-center'>
        <Container>
        <h1 >Orders</h1>
      <Table responsive striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Product Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nayan</td>
          <td>1</td>
          <td>xyz</td>

        </tr>
        <tr>
          <td>2</td>
          <td>Tanmay</td>
          <td>1</td>
          <td>xyz</td>

        </tr>
        <tr>
          <td>3</td>
          <td>Suyog</td>
          <td>1</td>
          <td>xyz</td>

        </tr>
        <tr>
          <td>4</td>
          <td>Aditya</td>
          <td>1</td>
          <td>xyz</td>

        </tr>
        
      </tbody>
    </Table>
    </Container>
    </div>
  )
}

export default Orders
