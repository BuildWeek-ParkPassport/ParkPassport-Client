import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter as Router } from 'react-router-dom';
import { ParkProvider } from './contexts/ParkContext';

ReactDOM.render(
    <Router>
        <ParkProvider>
          <App />
        </ParkProvider>
    </Router>, 
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

