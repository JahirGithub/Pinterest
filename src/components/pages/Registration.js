import React, { useState } from "react";
import 'react-bootstrap';
import './styles/style.css'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import img from "./img/test02.png";

function UserReg() {

    const [uname, setUserName] = useState("");
    const [uemail, setUserEmail] = useState("");
    const [umobile, setUserMobile] = useState("");
    const [img_path, setImg_path] = useState("");
    const [udob, setUserDOB] = useState("");
    const [ugender, setUserGender] = useState("");
    const [upass, setUserPass] = useState("");
    const [msg, setMessage] = useState("");

    const onChangeUserName = (e) => setUserName(e.target.value);
    const onChangeUserEmail = (e) => setUserEmail(e.target.value);
    const onChangeUserMobile = (e) => setUserMobile(e.target.value);
    const onChangeUserDOB = (e) => setUserDOB(e.target.value);
    const onChangeUserGender = (e) => setUserGender(e.target.value);
    const onChangeUserPass = (e) => setUserPass(e.target.value);

    const handleImage = async e => {
        e.preventDefault()
        let img = e.target.files[0]
        if (!img) return alert("File not exist.")
        //5242880 == 5 mb
        if (img.size > 1024 * 1024 * 10) return alert("Size too large!")
        if (img.type !== 'image/jpeg' && img.type !== 'image/png') return alert("File format is incorrect.")

        let data = new FormData()
        data.append('file', img)
        data.append('upload_preset', "ImgFolder")
        data.append('cloud_name', "jahuruddin007")
        fetch('https://api.cloudinary.com/v1_1/jahuruddin007/image/upload', {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setImg_path(data.url)
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
    

        const userinfo = {
            uname: uname,
            uemail: uemail,
            umobile: umobile,
            img_path: img_path,
            udob: udob,
            ugender: ugender,
            upass: upass,
        }

        axios.post('https://pinterestbackendgmit.herokuapp.com/user/register', userinfo)
            .then(res => {
                console.log(res.data)
                // setMessage('REGISTRATION SUCCESSFUL')
                setMessage(res.data.message)
            })
            .catch(err => {
                console.log(err);
            })

        setUserName('')
        setUserEmail('')
        setUserMobile('')
        setImg_path('')
        setUserDOB('')
        setUserGender('')
        setUserPass('')
    }

    return (
        <>
            <div className='div-bg'>
                <NavigationBar />
                <Container>
                    <Row>
                        <Col md={6}> 
                            <br /><br /><br /><br /><br /><br />
                            <div className="contact-info">
                                <center>
                                    <h3>Register Here</h3>
                                    <h4>You are most welcome as a new user !</h4>
                                </center>
                                <img src={img} alt="No img" />

                            </div>
                        </Col>
                        <Col md={6}>
                            <br />
                            <h3 style={{ color: "red" }}> {msg}</h3>
                            <br />
                            <h3 style={{ color: "black" }}>REGISTRATION</h3>
                            <form className="login-form" onSubmit={handleSubmit}>


                                <div className="form-group">
                                    <label>Enter Your Name</label>
                                    <input type="text" className="form-control" placeholder="Name" name="name" value={uname} onChange={onChangeUserName} required />
                                </div>

                                <div className="form-group">
                                    <label>Enter Your Email</label>
                                    <input type="email" className="form-control" placeholder="Enter Email" name="email" value={uemail} onChange={onChangeUserEmail} required />
                                </div>

                                <div className="form-group">
                                    <label>Enter Your Mobile Number</label>
                                    <input type="tel" className="form-control" placeholder="Contact No" name="mobile" value={umobile} onChange={onChangeUserMobile} required />
                                </div>

                                <div className="form-group">
                                    <label>Select Your Profile Picture</label>
                                    <input type="file" className="form-control" onChange={handleImage} required />
                                </div>
                                <div className="form-group">
                                    <label>Enter Your Date of Birth</label>
                                    <input type="date" className="form-control" placeholder="Date of Birth" name="dob" value={udob} onChange={onChangeUserDOB} required />
                                </div>

                                <div className="form-group">
                                    <label>Select Your Gender</label>
                                    <select value={ugender} onChange={onChangeUserGender} className="form-control" name="Gender" required>
                                        <option selected disabled></option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Enter a Password</label>
                                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={upass} onChange={onChangeUserPass} required />
                                </div>
                                <br />

                                <center><input type="submit" value="REGISTER" className="btn btn-success" /></center>

                            </form>
                        </Col>
                    </Row>
                </Container>
                <br /><br />
                
            </div>
        </>
    );
}
export default UserReg;


