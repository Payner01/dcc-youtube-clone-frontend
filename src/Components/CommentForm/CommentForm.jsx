import axios from 'axios';
import {useState} from 'react';
import { Form, Col, Button } from 'react-bootstrap'


const CommentForm = (props) => {

    const [comment, setComment] = useState('');
    let videoId = props.videoId // passes the video's id ('string') 

    function handleSubmit(event){
        event.preventDefault();
        let newComment = {
            text: comment,
            video_id: videoId
        }
        setComment(newComment);
        postComment(comment);
    }

    async function postComment(comment){
        let response = await axios.post('http://127.0.0.1:8000/api/comments/', comment);
        console.log(response)
        
    }

    console.log(videoId)
    console.log(comment)

    return ( 
            
        <Form onSubmit={handleSubmit}>
            <Form.Label column sm="2">{props.user}</Form.Label>
            <Form.Group  className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">Comments</Form.Label>
                    <Col sm="10">
                        <Form.Control type="text" placeholder="Insert Comment Here" onChange={(event) => setComment(event.target.value)} />
                    </Col>
                </Form.Group>
            <Button type='submit'>submit</Button>
        </Form>

     );
}
 
export default CommentForm;