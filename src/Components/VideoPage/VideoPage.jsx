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
                    <Card.Text>Title: {props.videoDetails.snippet.title}</Card.Text>
                    <Card.Title>Description: {props.videoDetails.snippet.description}</Card.Title>
                </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <RelateVideos relatedVideos={props.relatedVideos} selectedVideoId={props.selectedVideoId} relatedVideo={props.relatedVideo} videoId={props.selectedVideo}  selectedVideo={props.selectedVideo}/>
                </Card.Body>
            </Card>
        <br />
        <div className='comment-section'>
            <Comment user={props.user} userCode={props.userCode} videoId={props.selectedVideo}/>
        </div>
        </div>
        

    )}
 
export default VideoPage;