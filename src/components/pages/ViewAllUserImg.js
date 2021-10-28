import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { Redirect } from 'react-router';

function ViewAllUserImagesAdmin() {
    const [Imglist, setImgList] = useState([]);
    const [msg, setMessage] = useState("");
    
    useEffect(() => {
        axios.get('https://pinterestbackendgmit.herokuapp.com/admin/ViewallUserImg')
          .then(response => {
            console.log(response.data)
            setImgList(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      }, [])
    
      function viewImgList() {
        return Imglist.map((currentrow, index) => {
          return (
    
            <tr key={index}>
              <td>{currentrow.authorname}</td>
              <td>{currentrow.authoremail}</td>
              <td>{currentrow.catagory}</td>
              <td><img src={currentrow.img_path} width={250} alt=""/></td>
              <td>{currentrow.descrip}</td>
              <td>{currentrow.authorid}</td>
              <td><button onClick={() => removeRow(index)} className="btn btn-danger">Delete</button></td>
            </tr>
            
          );
          // console.log(currentrow.authorname);
        });
      }



      function removeRow(index){
        var templist = [...Imglist];
        let re = templist.splice(index,1);
         console.log("hello")
         console.log(templist)
        axios.delete('https://pinterestbackendgmit.herokuapp.com/user/remove/'+re[0]._id)
        .then(res=>{
            console.log(res.data)
            setMessage("Image Deleted Succesfully.");
            setImgList(templist)
        })
        .catch(err=>{
            console.log(err)
            setMessage('INVALID Image ID');
        })
    }
    
    let admin = sessionStorage.getItem('admin')
    if (admin == null) {
      return (<Redirect to="/adminlogin" />)
    }
    return (
        <div>
        <NavigationBar />
        <br /><br />
        <h3 style={{ color: "red" }}>{msg}</h3><br />
        <h3>ALL USER UPLOADED IMAGES DETAILS</h3>
        <br/>
        
        <Container style={{overflowX:'auto'}}>
        <Table striped bordered hover variant="info">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>CATAGORY</th>
              <th>IMAGE PATH</th>
              <th>DESCRIPTION</th>
              <th>ID</th>
              <th>Delete User Image</th>
            </tr>
          </thead>
  
          <tbody>
            {viewImgList()}
          </tbody>
          </Table>
          </Container>
      </div>
    )
  }

export default ViewAllUserImagesAdmin