import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const Customers = () => {
  return (
    <div className='container text-center'>
      <Container>
        <h1 >Customers</h1>
      <Table responsive striped bordered hover variant="light">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone Number</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Nayan</td>
          <td>9786261312</td>

        </tr>
        <tr>
          <td>2</td>
          <td>Tanmay</td>
          <td>1234566656</td>

        </tr>
        <tr>
          <td>3</td>
          <td>Suyog</td>
          <td>1234566646</td>

        </tr>
        <tr>
          <td>4</td>
          <td>Aditya</td>
          <td>123456656656</td>

        </tr>
        
      </tbody>
    </Table>
    </Container>
    </div>
  )
}

export default Customers;
