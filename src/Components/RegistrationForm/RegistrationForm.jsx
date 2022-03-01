import React, { useState } from 'react';
import axios from "axios";
import { Button, Form } from 'react-bootstrap'
import './RegistrationForm.css'
import { useNavigate } from "react-router-dom"

const RegistrationForm = (props) => {

    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            username: userName,
            password: password,
            email: email,
            first_name: name,
            last_name: lastName
        }
        props.createUser(newEntry);
        // TODO LATER: when user makes a bad password he will not be created to database. figure out how to keep him on registrationform
        navigate('/login')
    }


    return ( 
        <div className="color-overlay d-flex justify-content-center align-items-center">
        <Form onSubmit={ handleSubmit } className="rounded p-4 p-sm-3">
            <h3>Create User</h3>
            <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="first name" onChange={(event) => setName(event.target.value)}/>
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastname" placeholder="last name" onChange={(event) => setLastName(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="johndoe@example.com" onChange={(event) => setEmail(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="username" onChange={(event) => setUserName(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
                <Form.Text className="text-muted">Password must be atleast 8 characters!</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
        </div>
     );
}
 
export default RegistrationForm;