import React from "react";
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from "react-dom/client";

import App from './App';
import './index.css';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root'),
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
    </Router>);