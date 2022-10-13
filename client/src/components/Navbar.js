import {Link} from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
    
    return (


<nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Gossip & Glamour
        </a>
        <div className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/appointment"} className="nav-link">
              Appointments
            </Link>
          </li>
        
            <li className="nav-item">
            <Link to={"/signup"} className="nav-link">
              SignUp
            </Link> 
            </li>
            <li className="nav-item">
            <Link to={"/login"} className="nav-link">
                Login
            </Link>
          </li>
        </div>
      </nav>

















  
    )


}
 
export default Navbar;