import React, { useState } from 'react';
import './styles/style.css';
import NavigationBar from './NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import img from "./img/test02.png";



function AdminLogin(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpassword}`);

    if ((adminuserid === "iamadmin") && (adminpassword === "hiadmin")) {
      sessionStorage.setItem("admin", 'ADMIN')
      setMessage('WELCOME ADMIN')
      props.history.push('/adminafterlogin')

    }
    else
      setMessage('INVALID USERID OR PASSWORD')

    setAdminUserId('')
    setAdminPassword('')

  }

  return (

    <div className='div-bg'>

      <NavigationBar />
      <br /><br />
      <Container>
        <Row>
          <Col md={6}>
            <br /><br /><br /><br />
            <div className="contact-info">
              <center>
                <h3>Login Here</h3>
                <h4>You are most welcome Admin !</h4>
              </center>
              <img className="img-fluid" src={img} alt="No img" />

            </div>
          </Col>
          <Col md={6}>
            <h3 style={{ color: "red" }}>{msg}</h3><br />
            <h3 style={{ color: "dark" }}>ADMIN LOGIN</h3>
            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label>Enter Admin Your Id</label>
                <input type="text" className="form-control" placeholder="ADMIN USER ID" name="name" value={adminuserid} onChange={onChangeAdminUserId} required />
              </div>
              <div className="form-group">
                <label>Enter Admin Password</label>
                <input type="password" className="form-control" placeholder="ADMIN PASSWORD" name="password" value={adminpassword} onChange={(e) => setAdminPassword(e.target.value)} required />
              </div>
              <br />
              <center> <input type="submit" value="LOGIN" className="btn btn-success" /></center>
            </form>
          </Col>
        </Row>
      </Container>
      <br /><br /><br /><br />
    </div>

  );
}
export default AdminLogin
