import React from 'react';

const HomePage = (props) => {
    return ( 
    <div>
        
        <h1 className='primary'>hello world</h1>
        <iframe className="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/fZ1cIiqLuT4?autoplay=1&origin=http://example.com"
        frameborder="0"></iframe>
        <br/>
        <iframe className="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/SFKb7JzSjaA?autoplay=0&origin=http://example.com"
        frameborder="0"></iframe>
        <br/>
        <iframe className="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/XSwYYWhAegI?autoplay=0&origin=http://example.com"
        frameborder="0"></iframe>
    </div>
     );
}
 
export default HomePage;