import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import 'react-bootstrap';
import './styles/style.css';
import axios from 'axios';
import NavigationBar from './NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import img from "./img/test02.png";


function UploadImage() {
    let authuser = sessionStorage.getItem('user');
    let name = sessionStorage.getItem('name');
    let uid = sessionStorage.getItem('uid');

    const [title, setTitle] = useState("");
    const [catagory, setCatagory] = useState("");
    const [descrip, setDescrip] = useState("");
    const [img_path, setImg_path] = useState("");
    const [msg, setMessage] = useState("");

    if (authuser == null) {
        return (<Redirect to="/userlogin" />)
    }
    else {
        const onChangeTitle = (e) => {
            setTitle(e.target.value);
            setMessage("");
        }
        const onChangeCatagory = (e) => {
            setCatagory(e.target.value);
            setMessage("");
        }
        const onChangeDescrip = (e) => {
            setDescrip(e.target.value);
            setMessage("");
        }
        // const onChangeImg_path = (e) => {
        //     setImg_path(e.target.value);
        //     setMessage("");
        // }

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
            const images = {
                title: title,
                catagory: catagory,
                descrip: descrip,
                img_path: img_path,
                authorid: uid,
                authorname: name,
                authoremail: authuser,
            }

            axios.post('http://localhost:4500/user/upload', images)
                .then(res => {
                    console.log(res.data);
                    setMessage("Image Added Successfully!!");
                })
                .catch(err => {
                    console.log(err);
                })

            setTitle("");
            setDescrip("");
            setImg_path("");
            setCatagory("");
            // setAuthor("");

        }
        return (
            <>
                <div className='div-bg'>
                    <NavigationBar />
                    <Container>
                        <Row>
                            <Col md={6}>
                                <br /><br /><br /><br /><br /><br /><br />
                                <div className="contact-info">
                                    <center>
                                        <h3>Upload Image Here</h3>
                                    </center>
                                    <img src={img} alt="No img" />

                                </div>
                            </Col>
                            <Col md={6}>
                                <br />
                                <h3 style={{ color: "red" }}> {msg}</h3>
                                <br />
                                <h3 style={{ color: "black" }}>Upload Images</h3>
                                <form className="login-form" onSubmit={handleSubmit}>


                                    <div className="form-group">
                                        <label>Add a Title</label>
                                        <input type="text" className="form-control" placeholder="Title" value={title} onChange={onChangeTitle} required />
                                    </div>

                                    <div className="form-group">
                                        <label>Add a Description</label>
                                        <textarea value={descrip} onChange={onChangeDescrip} className="form-control" rows="2" required>
                                        </textarea>
                                    </div>

                                    <div className="form-group">
                                        <label>Select a Image</label>
                                        <input type="file" className="form-control" onChange={handleImage} required />
                                    </div>

                                    <div className="form-group">
                                        <label>Image Catagory</label>
                                        <input type="text" className="form-control" placeholder="Like Nature, Sports, Personal etc. " value={catagory} onChange={onChangeCatagory} required />
                                    </div>

                                    <div className="form-group">
                                        <label>Author Name</label>
                                        <input type="text" className="form-control" value={name} disabled />
                                    </div>

                                    <div className="form-group">
                                        <label>Author Email</label>
                                        <input type="text" className="form-control" value={authuser} disabled />
                                    </div>
                                    <br />

                                    <center><input type="submit" value="Upload" className="btn btn-success" /></center>

                                </form>
                            </Col>
                        </Row>
                    </Container>
                    <br />
                </div>
            </>
        )
    }
}
export default UploadImage;