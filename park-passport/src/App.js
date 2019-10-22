
import React, { useEffect, useContext } from "react";
import { Route,  Redirect, Switch } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import axiosWithAuth from "./utils/axiosWithAuth";

import { ParkContext } from './contexts/ParkContext'
import { ParkProvider } from "./contexts/ParkContext";


function App() {
  const { setParks } = useContext(ParkContext);

  useEffect(() => {
      axiosWithAuth()
      .get("/parks")
      .then(res => {
        console.log( "response data",res.data)
        setParks(res.data)
      })
      .catch(err => {
        console.log(err.response)
      })
  }, [])
  return (

   
      <div className="App">
        <Navbar />
      
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Redirect to="/login" />
            </>
          )}
        />
        
        
        <Route path="/signup/" render={() => <Signup /> } />
        <Route path="/login/" render={() => <Login  /> } />

     
      </div>
   
  );
}

export default App;
