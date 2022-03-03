import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';
import googleAPIKey from '../../API_Keys.json'

const RelateVideos = (props) => {
    
    const [relatedVideos, setRelatedVideos] = useState([])
    
    
    async function relatedVideo(){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.selectedVideo}&type=video&key=${googleAPIKey}`);
        setRelatedVideos(response.data.items);
        console.log(response);
    }

    useEffect(() => {
        relatedVideo();
    }, [])
    

    return ( 
        <div>
        {relatedVideos.map((video, index) => {
            return (
                <div>
                <Card key={index} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
                                <Card.Body>
                                    <Card.Title>{video.snippet.title}</Card.Title>
                                    <Button variant="primary" onClick={() => props.selectedVideoId(video)}>Watch</Button>
                                </Card.Body>
                        </Card>
            </div> 
            )
            
        })};
       </div> 
    );
}
 
export default RelateVideos;
