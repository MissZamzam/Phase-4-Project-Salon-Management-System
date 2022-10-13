import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp"

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok) {
        r.json().then((user)=>setUser(user))
      }
    })
  },[])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/appointment" element={<Appointment />} />
            <Route exact path="/signup" element={<SignUp setUser={setUser}/>} /> 
            <Route exact path="/login" element={<Login setUser={setUser}/>} /> 

          </Routes>
        </div>
      </Router>
      {/* <Appointment /> */}
    </div>
  );
}

export default App;
