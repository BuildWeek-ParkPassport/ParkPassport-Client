
import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";

import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";

import { ParkProvider } from "./contexts/ParkContext";


function App() {
  const { setParks } = useContext(ParkContext);

  useEffect(() => {
    setParks({
      // make api call
      // setParks
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
        
        <Route path="/signup/" render={ <Signup /> } />
        <Route path="/login/" render={<Login  />} />


      </div>
    
  );
}

export default App;
