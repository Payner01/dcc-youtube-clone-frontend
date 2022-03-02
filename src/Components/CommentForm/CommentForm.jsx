import axios from 'axios';
import {useState} from 'react';
import { Form, Col, Button } from 'react-bootstrap'


const CommentForm = (props) => {

    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    let videoId = props.videoId // passes the video's id ('string') 
    let user = props.user.username// passes in username
    
    let userCode = props.userCode


    console.log(user)

    function handleSubmit(event){
        event.preventDefault();
        let newComment = {
            user: userCode.user_id,
            text: comment,
            video_id: videoId,
            likes: likes,
            dislikes: dislikes

        }
        postComment(newComment);
        props.getComments();
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
        
    }

    console.log(videoId)
    console.log(comment)

    return ( 
            
        <Form onSubmit={handleSubmit}>
            <Form.Label column sm="2">{user}</Form.Label>
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