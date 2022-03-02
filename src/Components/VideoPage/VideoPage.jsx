import { Card } from 'react-bootstrap'
import Comment from '../Comment/Comment';
import RelateVideos from '../RelatedVideos/RelatedVideos';

const VideoPage = (props) => {
    
    

    return ( 
        <div className='video-content'>
         <h1>Current Video</h1>
        <Card style={{ width: '18rem' }}>
            <iframe className="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${props.selectedVideo}?autoplay=1&origin=http://example.com`}></iframe>
                <Card.Body>
                    <Card.Title>Title: {props.videoDetails.snippet.title}</Card.Title>
                    <Card.Text>Description: {props.videoDetails.snippet.description}</Card.Text>
                </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <RelateVideos selectedVideo={props.selectedVideo}/>
                </Card.Body>
            </Card>
        <br />
        <div className='comment-section'>
            <Comment user={props.user} userCode={props.userCode} videoId={props.videoId}/>
        </div>
        </div>
        

    )}
 
export default VideoPage;