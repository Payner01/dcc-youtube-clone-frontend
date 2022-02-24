import { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap'

const LoginForm = (props) => {

    
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let currentUser = {
            username: username,
            password: password
        }

    }

    return ( 

        <Form onSubmit={handleSubmit } className="rounded p-4 p-sm-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" onChange={(event) => setUserName(event.target.value)}/>
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    );
}
 
export default LoginForm;props