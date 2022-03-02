

const CommentList = (props) => {

    
    return ( 
        <div>
        
            {props.videoComments.map((comment, index) => {
                return (
                    <div>
                    <h3>{comment.user.username}</h3>
                    <h1 key={index}>{comment.text}</h1>
                    </div>
                );
            })}
        </div>
     );
}
 
export default CommentList;