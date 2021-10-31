import React, { useState, useEffect } from "react";
import axios from 'axios';
import './styles/style.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import NavigationBar from './NavigationBar';


function UserViewImages() {
    const [imglist, setImgList] = useState([]);
    const [msg, setMsg] = useState("");

    let uid = sessionStorage.getItem('uid')
    useEffect(() => {
        axios.get('https://pinterestbackendgmit.herokuapp.com/user/viewall' + uid)
            .then(response => {
                setImgList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    function viewImages() {
        return imglist.map((currentrow, index) => {
            if (currentrow.status === 0) {
                currentrow.status = "Pending"
            }
            else if (currentrow.status === 1) {
                currentrow.status = "Published"
            }
            else if(currentrow.status === -1) {
                currentrow.status = "Dismissed"
            }
            return (
                <tr key={index}>
                    <td>{currentrow._id} </td>
                    <td>{currentrow.title} </td>
                    <td>{currentrow.catagory} </td>
                    <td width={500}>{currentrow.descrip} </td>
                    <td><img src={currentrow.img_path} width={250} alt="..." /> </td>
                    <td>{new Date(Date.parse(currentrow.createdAt)).toLocaleString()}</td>
                    <td><button onClick={()=>removeRow(index)} className="btn btn-danger" >Delete</button> </td>
                </tr>
            )
        })
    };

    function removeRow(index){
        var templist = [...imglist];
        let remove = templist.splice(index,1);
        axios.delete('https://pinterestbackendgmit.herokuapp.com/user/remove/'+remove[0]._id)
        .then(res=>{
            console.log(res.data)
            setMsg("Image Deleted Succesfully.");
            setImgList(templist)
        })
        .catch(err=>{
            console.log(err)
            setMsg('INVALID IMAGE ID');
        })
    }

    return (
        <>
            <NavigationBar />
            <br /><br />
            <center><h3>ALL UPLOADED IMAGES DETAILS</h3></center>
        <br/>
        
        <Container style={{overflowX:'auto'}}>
        <Table  striped bordered hover variant="info">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Catagory</th>
                        <th>Description</th>
                        <th>Img Path</th>
                        <th>Time of Upload</th>
                        <th>Delete Image</th>
                    </tr>
                </thead>

                <tbody>
                    {viewImages()}
                </tbody>
            </Table>
            </Container>
            <br /><br />
        </>
    )
}
export default UserViewImages;