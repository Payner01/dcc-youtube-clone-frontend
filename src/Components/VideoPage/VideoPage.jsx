const VideoPage = (props) => {

    // we're going to have to pass props for search to have searched video play

    console.log(props.selectedVideo);

    console.log(props.title)

    console.props.description
    return ( 
        <div>
         <h1>Current Video</h1>
         <iframe className="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${props.selectedVideo}?autoplay=1&origin=http://example.com`}></iframe>
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
        </Card>



        </div>

    )}
 
export default VideoPage;