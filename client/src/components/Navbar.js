import {Link} from 'react-router-dom'


const Navbar = () => {
    return (

        <div className="navbar">
            {/* <h1>Beauty Salon</h1> */}
        <div className="container">
            <ul>
          <Link to="/" className='nav-links'>Home</Link>
          <Link to="/appointment" className='nav-links'>Appointment </Link>
         <Link to="/logout" className='nav-links'>Logout </Link>

          
          </ul>
        </div>
        </div>
    )


}
 
export default Navbar;