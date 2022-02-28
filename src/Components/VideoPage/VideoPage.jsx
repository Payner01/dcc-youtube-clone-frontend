const VideoPage = (props) => {

    // we're going to have to pass props for search to have searched video play
    console.log(props.filtervideoSearched)
    return ( 
        <div>
         <h1>Current Video</h1>
         <iframe className="ytplayer" type="text/html" width="640" height="360"
        src={props.filtervideoSearched}></iframe>
        
        </div>
    )}
 
export default VideoPage;