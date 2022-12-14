import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Book from "./components/Book";
import Appointment from "./components/Appointment"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    fetch("/me").then((r)=>{
      if(r.ok) {
        r.json().then((user)=>setUser(user))
      }
    })
  },[])
  if (!user) return <Login onLogin={setUser} />;
  return (
    <div className="App">
      <Router>
      <Navbar user={user} setUser={setUser} />     
         <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/book" element={<Book user={user}/>} />
            <Route exact path="/appointment" element={<Appointment />} />
            <Route exact path="/login" element={<Login />} /> 
          </Routes>
        </div>
      </Router>

      {/* <Appointment /> */}
    </div>
  );
}

export default App;
