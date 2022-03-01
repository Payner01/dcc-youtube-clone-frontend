import { Card } from 'react-bootstrap'

const VideoPage = (props) => {

    // we're going to have to pass props for search to have searched video play

    console.log(props.selectedVideo);

    console.log(props.title)

    console.log(props.description)
    return ( 
        <div>
         <h1>Current Video</h1>
         
        
        <Card style={{ width: '18rem' }}>
        <iframe className="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${props.selectedVideo}?autoplay=1&origin=http://example.com`}></iframe>
                <Card.Body>
                    <Card.Title>Title: {props.title}</Card.Title>
                    <Card.Text>
                    Description: {props.description}
                    </Card.Text>
                </Card.Body>
        </Card>



        </div>

    )}
 
export default VideoPage;