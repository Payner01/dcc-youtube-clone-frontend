import axios from 'axios';
import React, {useState} from 'react';
import { Form, Col, Button } from 'react-bootstrap'


const CommentForm = (props) => {

    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0); 

    function handleSubmit(event){
        event.preventDefault();
        let newComment = {
            user: props.userCode.user_id,
            text: comment,
            video_id: props.videoId,
            likes: likes,
            dislikes: dislikes

        }
        postComment(newComment);
      
        
    }

    

    async function postComment(comment){
        const jwt = localStorage.getItem('token');
        console.log(comment)
        try {
            let response = await axios.post('http://127.0.0.1:8000/api/comments/', comment, { headers: {Authorization: 'Bearer ' + jwt}});// add video string to path
            console.log(response);
            console.log(response.data);

        } catch (ex) {
            console.log(ex.response);
        }
        props.getComments();
        
    }

    // async function getUser(){
    //     try {
    //         let response =
    //     }
    // }

    return ( 
            
        <Form onSubmit={handleSubmit}>
            { localStorage.getItem('token') &&
            <React.Fragment>
            <Form.Label column sm="2"></Form.Label>
            </React.Fragment>
            }
            { !localStorage.getItem('token') &&
            <React.Fragment>
            <Form.Label column sm="2">Sign in To Comment!</Form.Label>
            </React.Fragment>
            }
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