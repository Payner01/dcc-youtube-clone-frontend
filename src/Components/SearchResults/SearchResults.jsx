import { useState } from "react";
import { Navbar, Container, Nav, Form, Button, FormControl, } from 'react-bootstrap'


const SearchResults = (props) => {


const [selectedVideo, setSelectedVideo] = useState('');

// function getVideoInfo()

    return ( 
        <div>
        {props.videosId.map((video, index) => {
            return (
                <div>
                     <Nav.Link onClick={() => props.selectedVideoId(video)}>Video {index +1}</Nav.Link>
                </div>
            )
            
        })}
        </div>
     );
}
 
export default SearchResults;