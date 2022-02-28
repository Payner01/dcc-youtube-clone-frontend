import { useState } from "react";
import { Navbar, Container, Nav, Form, Button, FormControl, } from 'react-bootstrap'


const SearchResults = (props) => {


const [selectedVideo, setSelectedVideo] = useState('');



    return ( 
        <div>
        {props.videosId.map((video, index) => {
            return (
                <div>
                        {console.log(video)}
                            {/* <iframe className="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&origin=http://example.com`}></iframe> */}
                            {/* <a href="/videopage" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&origin=http://example.com`} value={selectedVideo} onClick={handleSubmit}>video {index +1}</a> */}
                            <Nav.Link onClick={() => props.selectedVideoId(video.id.videoId)}>Video {index +1}</Nav.Link>
                </div>
            )
            
        })}
        </div>
     );
}
 
export default SearchResults;