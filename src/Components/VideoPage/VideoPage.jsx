const VideoPage = (props) => {

    // we're going to have to pass props for search to have searched video play

    console.log(props.selectedVideo);

    return ( 
        <div>
         <h1>Current Video</h1>
         <iframe className="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed/${props.selectedVideo}?autoplay=1&origin=http://example.com`}></iframe>
        
        </div>
    )}
 
export default VideoPage;