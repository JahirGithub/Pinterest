import React, { useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import './styles/style.css';
import img from "./img/test02.png";

function ContactUs() {

    const [vname, setVName] = useState("");
    const [vmobile, setVMobile] = useState("");
    const [vemail, setVEmail] = useState("");
    const [vcomment, setVComment] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeVName = (e) => setVName(e.target.value);
    const onChangeVMobile = (e) => setVMobile(e.target.value);
    const onChangeVEmail = (e) => setVEmail(e.target.value);
    const onChangeVComment = (e) => setVComment(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const userinfo = {
            vname: vname,
            vemail: vemail,
            vmobile: vmobile,
            vcomment: vcomment,
        }

        axios.post('https://pinterestbackendgmit.herokuapp.com/user/contactUs', userinfo)
        .then(res => {
            setMessage('Your query is submited! Thank You😊');
        })
        .catch(err => {
            console.log(err);
        })

    setVName('')
    setVMobile('')
    setVEmail('')
    setVComment('')
}


return (
    <div className='div-bg'>
        <NavigationBar />
        <Container>
            <Row>
                <Col md={6}>
                    <br /><br /><br /><br /><br /><br />
                    <div className="contact-info">
                    <center><h2>Contact Us</h2>
                        <h4>We would love to hear from you !</h4></center>
                        <img className="img-fluid" src={img} alt="No img" />
                        
                    </div>
                </Col>
                <Col md={6}>
                    <br />
                    <h3 style={{ color: "red" }}>{msg}</h3><br />
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" className="form-control" placeholder="Ratul Roy" name="name" value={vname} onChange={onChangeVName} required/>
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="number" className="form-control" placeholder="0123456789" name="mobile" value={vmobile} onChange={onChangeVMobile} />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control" placeholder="name@example.com" name="email" value={vemail} onChange={onChangeVEmail} />
                        </div>
                        <div className="form-group">
                            <label className="control-label col-sm-2" >Message:</label>
                            <div className="col-sm-12">
                                <textarea className="form-control" rows="5" placeholder='Leave a comment here' value={vcomment} onChange={onChangeVComment} required></textarea>
                            </div>
                        </div>
                        <br />
                        <center><input type="submit" value="Submit" className="btn btn-success" /></center>
                    </form>
                </Col>
            </Row>
        </Container>
        <br /><br /><br /><br />
    </div >
)


}
export default ContactUs;


