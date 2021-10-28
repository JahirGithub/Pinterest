import axios from "axios";
import React, { useState } from "react";
import './styles/style.css';
import { Col, Container, Row } from 'react-bootstrap';
import img from "./img/test01.png";
import NavigationBar from './NavigationBar';



function NavSearch(props) {

    const [Imglist, setImgList] = useState([]);
    const [catagory, setcatagory] = useState("");
    const [msg, setMessage] = useState("");
    // const [result, setResult] = useState([]);

    const onChangeCat = (e) => {
        setcatagory(e.target.value);
        setMessage(''); //REMOVE ERROE MSG
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(catagory)
        axios.get('http://localhost:4500/user/searchimg/' + catagory)
            .then(res => {
                setImgList(res.data)
                // setMessage("Search results for "+catagory)
            })
            .catch(err => {
                setMessage("No Images found on this catagory")
            })

        setcatagory('')
    }

    function viewImgList() {
        return Imglist.map((currentrow, index) => {
            return (
                <>
                    <center>
                        <div className="card" style={{ borderRadius: '20px' }} key={index}>
                            <center> <img src={currentrow.img_path} alt="" style={{ borderRadius: '20px', width: '30%', height: '40%', margin: '10px' }} /></center>
                            <div className="card-body">
                                <h5 className="card-title">{<span>By: @{currentrow.authorname}</span>}</h5>
                                <h5 className="card-title">{<span>catagory : {currentrow.catagory}</span>}</h5>
                                <h5 className="card-title">{<span>Uploaded at : {currentrow.createdAt}</span>}</h5>
                            </div>
                        </div>
                    </center>

                </>

            );
        });
    }




    return (
        <>
            <div className='div-bg'>
                <NavigationBar />
                <br /><br />
                <Container>
                    <Row>
                        <Col md={6}>
                            <br />
                            <h3 style={{ color: "red" }}>{msg}</h3>
                            <br />
                            <h3 >Search Images</h3>
                            <form className='login-form' onSubmit={handleSubmit}>

                                {/* <input type="search" id="form1" placeholder="Enter Image Catagory" value={catagory}
                        onChange={onChangeCat} required /> */}
                                <div className="form-group">
                                    <label>Enter Images Catagory</label>
                                    <input type="text" className="form-control" placeholder="Enter Images Catagory" value={catagory} onChange={onChangeCat} />
                                </div>

                                <br /><br />
                                <center>
                                    <input type="submit" value="Search" className="btn btn-success" />
                                </center>
                            </form>
                        </Col>
                        <Col md={6}>
                            <br /><br /><br />
                            <div className="contact-info">
                                <center>
                                    <h3>Search Images Here</h3>
                                    
                                </center>
                                <img src={img} alt="No img" />

                            </div>
                        </Col>
                    </Row>
                </Container>
                <br /><br />

            </div>
            <div class="card-columns">
                {viewImgList()}
            </div>
        </>
    )
}
export default NavSearch;