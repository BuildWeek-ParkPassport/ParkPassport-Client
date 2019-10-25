
import React, { useEffect, useContext } from "react";
import { Route,  Redirect, Switch } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import axiosWithAuth from "./utils/axiosWithAuth";
import ParkList from './components/ParkList';
import { ParkContext } from './contexts/ParkContext'
import ParkReview from "./components/ParkReview";


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
        <Route exact path="/" component={Login} />
        <Route path="/signup/" component={Signup} />
        <Route path="/login/" component={Login} />
        <Route path="/review/:id" component={ParkReview} />
        <Route path="/parklist/" component={ParkList} />
      </div>
   );
}

export default App;
