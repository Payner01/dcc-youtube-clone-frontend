// import jwt_decode from 'jwt-decode';
import './App.css';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import VideoPage from './Components/VideoPage/VideoPage';
import keys from './API_Keys.json'
import axios from 'axios';
import SearchResults from './Components/SearchResults/SearchResults';

// import axios from 'axios';

function App() {

  const [user, setUser] = useState(null);

    // // gets Token for users
    // useEffect(() => {
    //     const jwt = localStorage.getItem('token');
    //     try {
    //         const decodedUser = jwt_decode(jwt);
    //         setUser(decodedUser);
    //     } catch {}
    // }, []);

    // user search
    const [videoSearched, setVideoSearched] = useState(null);
    // gets a video IDs
    const [videosId, setVideosId] = useState([]);
    // video that user clicked on
    const [selectedVideo, setSelectedVideo] =  useState([]);

    console.log(videoSearched)
    console.log(videosId)
    async function filteredVideo(videoSearched){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${keys.googleAPIKey}&type=video&q=${videoSearched}`);
        setVideosId(response.data.items);

        console.log(response.data.items);
          }

    console.log(selectedVideo)
    function selectedVideoId(videoid){
      setSelectedVideo(videoid);
      console.log(videoid);
    }



  return (
    <div className="App">
      <NavBar filteredVideo={filteredVideo}/>
      <header className="App-header">
        <Routes>
          {/* <Route path='/profile' element={() => {
            if (!user) {
              return <LoginForm />
            }
            else {
              return <RegistrationForm user={user} />
            }
          }} /> */}
          <Route exact path='/' element={<HomePage />}/>
          <Route path='register' element={<RegistrationForm />} />
          <Route path='login' element={<LoginForm />} />

          {/* How to click on video and send user to videopage maybe make another component to display videos that were sreached  */}
          <Route path='videopage' element={<VideoPage selectedVideo={selectedVideo}/>} />
          <Route path='searchresults' element={<SearchResults selectedVideoId={selectedVideoId} videosId={videosId}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
