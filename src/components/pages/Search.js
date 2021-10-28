import React, { useState } from 'react'
import axios from 'axios';
import './styles/style.css';
import Table from 'react-bootstrap/Table';
import NavigationBar from './NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import img from "./img/test01.png";

function Search() {
  const [emplist, setEmpList] = useState([]);
  const [eemail, setEmpEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [msg, setMessage] = useState("");

  const onChangeEmpEmail = (e) => {
    setEmpEmail(e.target.value);
    setMessage(''); //REMOVE ERROE MSG
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    axios.get('http://localhost:4500/admin/search/' + eemail)
      .then(res => {
        console.log(res.data)
        setEmpList(res.data)
        setStatus(true)
      })
      .catch(err => {
        console.log(err)
        setMessage('INVALID EMAIL ID')
      })

    setEmpEmail('')
  }

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

  if (status === false) {
    return (
      <div className='div-bg'>
        <NavigationBar />
        <br />
        <Container>
          <Row>
            <Col md={6}>
              <h3 style={{ color: "red" }}>{msg}</h3>
              <br />
              <h3 style={{ color: 'black' }}>Search User</h3>
              <form onSubmit={handleSubmit} className="login-form">
                {/* <label>Enter a email id for search</label>
          <input type="email" value={eemail}
            onChange={onChangeEmpEmail}
            placeholder="EMAIL ID"
            required /> */}

                <div className="form-group">
                  <label>Enter a Email For Search User</label>
                  <input type="email" className="form-control" placeholder="Enter Email" name="email" value={eemail} onChange={onChangeEmpEmail} required />
                </div>
                <br />
                <center><input type="submit" value="SEARCH" className="btn btn-success" /></center>
              </form>
            </Col>
            <Col md={6}>
              <br /><br /><br /><br /><br /><br />
              <div className="contact-info">
                <center>
                  <h3>Search Useres Here</h3>

                </center>
                <img src={img} alt="No img" />

              </div>
            </Col>
          </Row>
        </Container>
        <br />
      </div>);
  }
  else {
    return (
      <div>
        <NavigationBar />
        <br /><br />
        <h3>USER DETAILS</h3>
        <br /><br />
        <Container style={{ overflowX: 'auto' }}>
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
}

export default Search
