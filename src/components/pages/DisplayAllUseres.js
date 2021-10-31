import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
function DisplayAll() {
  const [emplist, setEmpList] = useState([]);

 
  useEffect(() => {
    axios.get('https://pinterestbackendgmit.herokuapp.com/admin/viewalluser')
    .then(response => {
      console.log(response.data)
      setEmpList(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
}, [])

function viewUsers() {
  return emplist.map((currentrow, index) => {
    return (
      <tr key={index}>
        <td>{currentrow.name}</td>
        <td>{currentrow.email}</td>
        <td>{currentrow.mobile}</td>
        <td>{currentrow.dob}</td>
        <td>{currentrow.gender}</td>
      </tr>
    );
  });
}

return (
  <div>
    <NavigationBar />
    <br /><br />
    <center><h3 style={{width:'50%'}}>ALL USER DETAILS</h3></center>
    <br /><br />
    <Container style={{overflowX:'auto'}}>
      <Table striped bordered hover variant="info">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Gender</th>
        </tr>
      </thead>

      <tbody>
        {viewUsers()}
      </tbody>
    </Table>
    </Container>
  </div>
)
}


export default DisplayAll