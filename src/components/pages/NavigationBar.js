import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import './styles/style.css';

function MyNavbar() {
    let authuser = sessionStorage.getItem('user');
    let name = sessionStorage.getItem('name');
    let img = sessionStorage.getItem('Img');
    let admin = sessionStorage.getItem('admin');

    if (admin) {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#33acd3'}} variant="light">
                    <Navbar.Brand as={Link} to="/adminafterlogin">GMIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link as={Link} to="/adminafterlogin">Admin Home</Nav.Link> */}
                            <Nav.Link as={Link} to="/displayall">Display All Useres</Nav.Link>
                            <Nav.Link as={Link} to="/search">Search User</Nav.Link>
                            <Nav.Link as={Link} to="/delete">Delete User</Nav.Link>
                            <Nav.Link as={Link} to="/viewalluser">Display All User Images</Nav.Link>
                            <Nav.Link as={Link} to="/allquery">All Query</Nav.Link>

                        </Nav>
                        <Nav className="mr-auto">


                            <Nav.Link as={Link} to="#">Welcome Admin</Nav.Link>
                            <Nav.Link as={Link} to="/logout" style={{ color: 'red' }}>Logout</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
    else if (authuser) {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#33acd3'}} variant="light">
                    <Navbar.Brand as={Link} to="/userpanel">GMIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/uploadimage">Upload Image</Nav.Link>
                            <Nav.Link as={Link} to="/viewimage">View Uploaded Image</Nav.Link>
                            <Nav.Link as={Link} to="/updateprofile">Update Profile</Nav.Link>
                        </Nav>
                        <Nav className="mr-auto">

                            <img src={img} alt='no_img' width={40} height={40} className="rounded rounded-circle" />
                            <Nav.Link as={Link} to="#">{name}</Nav.Link>

                            <Nav.Link as={Link} to="/logout" style={{ color: 'red' }}>Logout</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
    else {
        return (
            <>
                <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#33acd3'}} variant="light">
                    <Navbar.Brand as={Link} to="/">GMIT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/searchimg">Search Images</Nav.Link>
                            <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                            <Nav>
                                <NavDropdown title="Login as" id="collasible-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/login">User Login</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/adminlogin">Admin Login</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }

}
export default MyNavbar;