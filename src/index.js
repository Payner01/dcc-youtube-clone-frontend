import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from '@lyket/react';

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router apiKey="pt_24dd1faa7318ffb3fbbd38955f8a8e">
      <App />
    </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

