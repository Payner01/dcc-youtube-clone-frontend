import { Card } from 'react-bootstrap'
import Comment from '../Comment/Comment';

const VideoPage = (props) => {

    // we're going to have to pass props for search to have searched video play
    
    let user = props.user
    
    let videoId = props.selectedVideo
    
    console.log(user)

    console.log(props.selectedVideo);

    console.log(props.videoDetails);

    return ( 
        <div className='video-content'>
         <h1>Current Video</h1>
         
        
        <Card style={{ width: '18rem' }}>
        <iframe className="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${props.selectedVideo}?autoplay=1&origin=http://example.com`}></iframe>
                <Card.Body>
                    <Card.Title>Title: {props.videoDetails.snippet.title}</Card.Title>
                    <Card.Text>
                    Description: {props.videoDetails.snippet.description}
                    </Card.Text>
                </Card.Body>
        </Card>
        <br />
        <div className='comment-section'>
            <Comment user={user} videoId={videoId}/>
        </div>
        </div>
        

    )}
 
export default VideoPage;