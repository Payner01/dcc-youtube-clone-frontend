import './CommentList.css';

const CommentList = (props) => {

    
    return ( 
        <div>
        
            {props.videoComments.map((comment, index) => {
                return (
                    <div className="form-grid">
                    <div key={index} className="form-control" >
                    <h4 className="form-heading">{comment.user.username}</h4>
                    <div  className="post-content">{comment.text}</div>                       
                    
                    </div>
                </div>
                );
            })}
        </div>
     );
}
 
export default CommentList;