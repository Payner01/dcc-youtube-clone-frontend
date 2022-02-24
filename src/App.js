// import jwt_decode from 'jwt-decode';
import './App.css';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {

  // const [user, setUser] = useState(null);

  //   useEffect(() => {
  //       const jwt = localStorage.getItem('token');
  //       try {
  //           const decodedUser = jwt_decode(jwt);
  //           setUser(decodedUser);
  //       } catch {}
  //   }, [])



  return (
    <div className="App">
      <header className="App-header">
        <h1>hello world</h1>
        <RegistrationForm />
      </header>
    </div>
  );
}

export default App;
