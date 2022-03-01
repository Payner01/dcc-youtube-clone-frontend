import jwt_decode from 'jwt-decode';
import './App.css';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Components/HomePage/HomePage';
import VideoPage from './Components/VideoPage/VideoPage';
import keys from './API_Keys.json'
import axios from 'axios';
import SearchResults from './Components/SearchResults/SearchResults';
import { useNavigate } from "react-router-dom"


function App() {

  let navigate = useNavigate();
// user login info
  const [user, setUser] = useState(null);
// This get users token
  const [userCode, setUserCode] = useState (null);

  async function createUser(newEntry){
    console.log(newEntry);
    try {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', newEntry)
        console.log(response);
        console.log(response.data);
    } catch (ex) {
        console.log(ex.response);
    }
  }

  async function loginUser(loginUser){
    console.log(loginUser);
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser)
    console.log(response);
    if(response.status === 201){
      setUser(loginUser);
      localStorage.setItem('token', response.data.access)
      navigate('/');
    }} catch (ex) {
      console.log(ex.response)
    }
  }
  console.log(user)

  // gets Token for users keep user on website even after refresh
  useEffect(() => {
    const jwt = localStorage.getItem('token');
    try {
        const decodedUser = jwt_decode(jwt);
        setUserCode(decodedUser);

    } catch {}
}, []);



/////////////////////// Video Section ///////////////////////////

    const [videoSearched, setVideoSearched] = useState(null);
    // gets a video IDs
    const [videosId, setVideosId] = useState([]);
    // video id that user clicked on
    const [selectedVideo, setSelectedVideo] =  useState("");
    //sets the selected video
    const [videoDetails, setVideoDetails] = useState([]);
    // holds the details of selected video

    async function filteredVideo(videoSearched){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${keys.googleAPIKey}&type=video&q=${videoSearched}&part=snippet`);
        setVideosId(response.data.items);
        console.log(response.data.items);
    }

    const selectedVideoId = (video) => {
      setSelectedVideo(video.id.videoId);
      setVideoDetails(video);
      console.log(video);
      navigate('/videopage')
    }
    console.log(videoDetails);

    
  

  return (
    <div className="App">
      <NavBar filteredVideo={filteredVideo} userCode={userCode} user={user}/>
      <header className="App-header">
        <Routes>
        <Route path='register' element={() => {
            if (!userCode) {
              return <LoginForm />
            }
            else {
              return <HomePage user={user} />
            }
          }} />
          <Route exact path='/' element={<HomePage />}/>
          <Route path='register' element={<RegistrationForm createUser={createUser}/>} />
          <Route path='login' element={<LoginForm loginUser={loginUser} />} />

          {/* How to click on video and send user to videopage maybe make another component to display videos that were sreached  */}
          <Route path='videopage' element={<VideoPage videoDetails={videoDetails} selectedVideo={selectedVideo} user={user}/>} />
          <Route path='searchresults' element={<SearchResults selectedVideoId={selectedVideoId} videosId={videosId}/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
