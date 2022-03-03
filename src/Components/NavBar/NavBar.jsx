import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button, FormControl, } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"


const NavBar = (props) => {

    let navigate = useNavigate();

    const [searched, setSearched] = useState('');

    function handleSubmit(event){
        event.preventDefault(); 
        props.filteredVideo(searched);
        navigate('/searchresults')
    }
    
    return ( 
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">MeTube</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {!localStorage.getItem('token') &&
                <React.Fragment>
                <Nav.Link href='/login'>Login</Nav.Link>
                <Nav.Link href='/register'>Register</Nav.Link>
                </React.Fragment>
                }
                {localStorage.getItem('token') && 
                <React.Fragment>      
                <Button onClick={() => props.signOut()}>Logout</Button>
                </React.Fragment>       
                }
                
            </Nav>
            </Navbar.Collapse>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" onChange={(event) => setSearched(event.target.value)}/>
                    <Button type='submit' variant="secondary">Search</Button>
                </Form>
        </Container>
    </Navbar>



        
     );
}
 
export default NavBar;