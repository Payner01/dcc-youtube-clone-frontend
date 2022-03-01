

const CommentList = (props) => {
    return ( 
        <body>
            {props.videoComments.map((comment) => {
                return (
                    <div className="form-grid">
                        <div className="form-control" >
                        <h4 className="form-heading">{comment.name}</h4>
                        <div className="post-content">{comment.text}</div>                       
                        </div>
                    </div>
                );
            })}
        </body>
     );
}
 
export default CommentList;