import React from 'react';
import { Navbar, Container, Nav, Form, Button, FormControl, } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const NavBar = ({}) => {
    return ( 
        <Navbar bg="light" expand="lg">
        <Container cla>
            <Navbar.Brand href="/">MeTube</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>
                <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="info">Search</Button>
        </Form>
        </Container>
    </Navbar>

     );
}
 
export default NavBar;