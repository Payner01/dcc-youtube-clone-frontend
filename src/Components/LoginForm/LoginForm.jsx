import { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {

    let navigate = useNavigate();
    
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let currentUser = {
            username: username,
            password: password
        }
        props.loginUser(currentUser);
        console.log(currentUser)
        navigate('/');
    }
    //TODO add authorization so no just anyone can log in

    return ( 

        <Form onSubmit={handleSubmit } className="rounded p-4 p-sm-3">
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Email" onChange={(event) => setUserName(event.target.value)}/>
                <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
        </Form>
    );
}
 
export default LoginForm;