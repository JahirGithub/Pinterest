import React, { useState } from "react";
import 'react-bootstrap';
import './styles/style.css';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import img from "./img/test02.png";


function UserLogin(props) {
    const [userid, setUserId] = useState("");
    const [password, setpassword] = useState("");;
    const [msg, setMessage] = useState("");;

    const onChangeUserId = (e) => setUserId(e.target.value);
    const onChangePassword = (e) => setpassword(e.target.value);

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(`EMAIL: ${userid}`);
        console.log(`PASS: ${password}`);

        const cred = {
            userid: userid,
            password: password,
        }

        axios.post('https://pinterestbackendgmit.herokuapp.com/user/login', cred)
        .then(res => {
            console.log(res);
            if (password === res.data[0].password) {
                setMessage('LOGIN SUCCESSFUL')
                sessionStorage.setItem("user", userid);
                sessionStorage.setItem("name", res.data[0].name);
                sessionStorage.setItem("uid", res.data[0]._id);
                sessionStorage.setItem("Img", res.data[0].img_path);
                props.history.push('/userpanel')
            }
            else {
                setMessage('Password Not Matched');
            }
        })
        .catch(err => {
            console.log(err);
        })

    setUserId('')
    setpassword('')

}

return (
    <>
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
                                <h4>You are most welcome user !</h4>
                            </center>
                            <img className="img-fluid" src={img} alt="No img" />

                        </div>
                    </Col>
                    <Col md={6}>
                        <br />
                        <h3 style={{ color: "red" }}> {msg}</h3>
                        <br />
                        <h3 style={{ color: "black" }}>USER LOGIN</h3>
                        <form onSubmit={handleSubmit} className="login-form">



                            <div className="form-group">
                                <label>Enter Your Emailid</label>
                                <input type="email" className="form-control" placeholder="Enter email" name="email" value={userid}
                                    onChange={onChangeUserId} required />
                            </div>

                            <div className="form-group">
                                <label>Enter Your Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" value={password}
                                    onChange={onChangePassword} required />
                            </div>
                            <br />

                            <center><input type="submit" value="LOGIN" className="btn btn-success" /></center>


                        </form>
                    </Col>
                </Row>
            </Container>
            <br /><br /><br /><br />
        </div>
    </>
);
}
export default UserLogin;





