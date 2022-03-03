import axios from "axios";
import { useEffect, useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList"


const Comment = (props) => {

    const [videoComments, setVideoComments] = useState([]);
    
    

    

    async function getComments(){
        let response = await axios.get(`http://127.0.0.1:8000/api/comments/comments/${props.videoId}/`);
        setVideoComments(response.data.reverse());
        console.log(response.data);
        
    }

    useEffect(() => {
        getComments();
        
    }, [])

    return ( 
        <div>
            <CommentForm selectedVideoId={props.selectedVideoId} videoId={props.videoId} userCode={props.userCode} getComments={getComments} user={props.user} />
            <CommentList videoComments={videoComments} />
        </div>

     );
}
 
export default Comment;