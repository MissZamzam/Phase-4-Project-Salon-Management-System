// import {Link} from 'react-router-dom'


// const Navbar = () => {
//     return (


// <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <a href="/tutorials" className="navbar-brand">
//           Gossip & Glamour
//         </a>
//         <div className="navbar-nav mr-auto">
//         <li className="nav-item">
//             <Link to={"/"} className="nav-link">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/appointments"} className="nav-link">
//               Appointments
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/book"} className="nav-link">
//               Book
//             </Link>
//           </li>
//         </div>
//       </nav>

















  
//     )


// }
 
// export default Navbar;

function Navbar({ onLogout }) {
    function handleLogout() {
      fetch("/logout", {
        method: "DELETE",
      }).then(() => onLogout());
    }
  
    return (
      <header>
        <button onClick={handleLogout}>Logout</button>
      </header>
    );
  }