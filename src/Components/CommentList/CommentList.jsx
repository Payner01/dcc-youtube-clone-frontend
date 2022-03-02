

const CommentList = (props) => {

    console.log(props.videoComments)
    
    return ( 
        <div>
        
            {props.videoComments.map((comment, index) => {
                return (
                    <h1 key={index}>{comment.text}</h1>
                );
            })}
        </div>
     );
}
 
export default CommentList;