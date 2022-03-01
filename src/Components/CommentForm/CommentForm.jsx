import {useState} from 'react';
import { Form, Col, Button } from 'react-bootstrap'


const CommentForm = (props) => {

    const [comment, setComment] = useState('');

    

    console.log(props.user)

    return ( 
            
        <Form>
                <Form.Label column sm="2">
                {props.user}
                </Form.Label>
            <Form.Group  className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                comment
                </Form.Label>
                <Col sm="10">
                <Form.Control type="password" placeholder="Insert Comment Here" />
                </Col>
            </Form.Group>
        </Form>

     );
}
 
export default CommentForm;