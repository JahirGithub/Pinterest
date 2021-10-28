import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import NavigationBar from './NavigationBar';
import './styles/style.css';
import axios from 'axios';
import 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import img from "./img/test01.png";



function UpdateProf() {

    let uid = sessionStorage.getItem('uid');


    const [uname, setUserName] = useState("");
    const [uemail, setUserEmail] = useState("");
    const [umobile, setUserMobile] = useState("");
    const [udob, setUserDOB] = useState("");
    const [ugender, setUserGender] = useState("");
    const [upass, setUserPass] = useState("");
    const [msg, setMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:4500/user/update/' + uid)
            .then(response => {
                setUserName(response.data[0].name);
                setUserEmail(response.data[0].email);
                setUserMobile(response.data[0].mobile);
                setUserDOB(response.data[0].dob);
                setUserGender(response.data[0].gender);
                setUserPass(response.data[0].password);

                // setNewsList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    if (uid == null) {
        return (<Redirect to="/userlogin" />)
    }
    else {

        const onChangeUserName = (e) => {
            setUserName(e.target.value);
            setMessage("");
        }
        const onChangeUserEmail = (e) => {
            setUserEmail(e.target.value);
            setMessage("");
        }
        const onChangeUserMobile = (e) => {
            setUserMobile(e.target.value);
            setMessage("");
        }
        const onChangeUserDOB = (e) => {
            setUserDOB(e.target.value);
            setMessage("");
        }
        const onChangeUserGender = (e) => {
            setUserGender(e.target.value);
            setMessage("");
        }
        const onChangeUserPass = (e) => {
            setUserPass(e.target.value);
            setMessage("");
        }

        const handleSubmit = (evt) => {
            evt.preventDefault();

            const userinfo = {
                uid: uid,
                uname: uname,
                uemail: uemail,
                umobile: umobile,
                udob: udob,
                ugender: ugender,
                upass: upass,
            }

            axios.post('http://localhost:4500/user/update', userinfo)
                .then(res => {
                    console.log(res.data)
                    setMessage('PROFILE UPDATED SUCCESSFUL')
                })
                .catch(err => {
                    console.log(err);
                })

        }

        return (
            <>
                <div className='div-bg'>
                    <NavigationBar />
                    <Container>
                        <Row>
                            <Col md={6}>
                                <br />
                                <h3 style={{ color: "red" }}> {msg}</h3>
                                <br />
                                <h3 style={{ color: "black" }}>Update Profile</h3>
                                <form className="login-form" onSubmit={handleSubmit}>


                                    <div className="form-group">
                                        <label>Your Name</label>
                                        <input type="text" className="form-control" placeholder="Name" name="name" value={uname} onChange={onChangeUserName} />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Enter email" name="email" value={uemail} onChange={onChangeUserEmail} disabled />
                                    </div>

                                    <div className="form-group">
                                        <label>Contact No</label>
                                        <input type="tel" className="form-control" placeholder="Contact no" name="mobile" value={umobile} onChange={onChangeUserMobile} />
                                    </div>

                                    <div className="form-group">
                                        <label>Date of Birth</label>
                                        <input type="date" className="form-control" placeholder="Date of Birth" name="dob" value={udob} onChange={onChangeUserDOB} />
                                    </div>

                                    <div className="form-group">
                                        <label>Gender</label>
                                        <select value={ugender} onChange={onChangeUserGender} className="form-control" name="Gender">
                                            <option selected disabled></option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Enter password" name="password" value={upass} onChange={onChangeUserPass} />
                                    </div>
                                    <br />

                                    <center><input type="submit" value="UPDATE" className="btn btn-danger" /></center>
                                </form>
                            </Col>
                            <Col md={6}>
                                <br /><br /><br /><br /><br /><br /><br />
                                <div className="contact-info">
                                    <center>
                                        <h3>Update Profile Here</h3>

                                    </center>
                                    <img src={img} alt="No img" />

                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <br />
                </div>
            </>
        )
    }



}
export default UpdateProf;