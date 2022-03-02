import axios from "axios";
import { useEffect, useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList"


const Comment = (props) => {

    const [videoComments, setVideoComments] = useState([]);
    let videoId = props.videoId // passes the video's id ('string')
    let user = props.user
    let userCode = props.userCode

    async function getComments(){
        let response = await axios.get('http://127.0.0.1:8000/api/comments/comments/');
        setVideoComments(response.data);
        console.log(response.data)
        
    }

    useEffect(() => {
        getComments();
    }, [])

    return ( 
        <div>
            <CommentForm videoId={videoId} userCode={userCode} getComments={getComments}user={user} />
            <CommentList videoComments={videoComments} />
        </div>

     );
}
 
export default Comment;