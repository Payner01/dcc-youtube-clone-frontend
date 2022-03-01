import axios from "axios";
import { useEffect, useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList"


const Comment = (props) => {

    const [videoComments, setVideoComments] = useState('');

    async function getComments(){
        let response = await axios.get('http://127.0.0.1:8000/api/comments/comments/');
        setVideoComments(response.data);
    }

    useEffect(() => {
        getComments();
    })

    return ( 
        <div>
            <CommentForm />
            <CommentList videoComments={videoComments} />
        </div>

     );
}
 
export default Comment;