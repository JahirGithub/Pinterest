import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';


function ContactAll() {
  const [emplist, setEmpList] = useState([]);

  //Similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    axios.get('https://pinterestbackendgmit.herokuapp.com/admin/allquery')
      .then(response => {
        console.log(response.data)
        setEmpList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function viewallquery() {
    return emplist.map((currentrow, index) => {
      return (
        <tr key={index}>
          <td>{currentrow.vname}</td>
          <td>{currentrow.vemail}</td>
          <td>{currentrow.vmobile}</td>
          <td>{currentrow.vcomment}</td>
          &nbsp;
          <button className="btn btn-success" onClick={() => {
              window.open(`tel: ${currentrow.vmobile}`);
          }}
          >
              <i className="fa fa-phone" aria-hidden="true"></i>
          </button>
          &nbsp;
          <button className="btn btn-primary text-light" onClick={() => {
              window.open(`mailto: ${currentrow.vemail}`);
          }}
          >
              <i className="fa fa-envelope" aria-hidden="true"></i>
          </button>
        </tr>
      );
    });
  }

  return (
    <div>
      <NavigationBar />
      <br />
      <h3 align="center">ALL USER DETAILS</h3>
        <Container style={{overflowX:'auto'}}>
        <Table striped bordered hover variant="info">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Mobile</th>
      <th>Message</th>
      <th>Contact</th>
    </tr>
  </thead>

        <tbody>
          {viewallquery()}
        </tbody>
      </Table>
      </Container>
    </div>
  )
}


export default ContactAll