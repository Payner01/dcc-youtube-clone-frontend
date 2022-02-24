// import jwt_decode from 'jwt-decode';
import './App.css';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
// import axios from 'axios';

function App() {

  // const [user, setUser] = useState(null);

    // gets Token for users
    // useEffect(() => {
    //     const jwt = localStorage.getItem('token');
    //     try {
    //         const decodedUser = jwt_decode(jwt);
    //         setUser(decodedUser);
    //     } catch {}
    // }, []);



  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <Routes>
          {/* <Route path='/profile' element={() => {
            if (!user) {
              return <LoginForm />
            }
            else {
              return <RegistrationForm user={user} />
            }
          }} /> */}
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
