import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Appointment from "./components/Appointment";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Logout from "./Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/appointment" element={<Appointment />} />          
          {/* <Route exact path="/logout" element={<Logout />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
