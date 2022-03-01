

const CommentList = (props) => {

    console.log(props.videoComments)
    
    return ( 
        <body>
            {props.videoComments.map((comment, index) => {
                return (
                    <h1 key={index}>{comment.text}</h1>
                );
            })}
        </body>
     );
}
 
export default CommentList;