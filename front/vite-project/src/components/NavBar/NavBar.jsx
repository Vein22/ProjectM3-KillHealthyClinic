import Styles from "./NavBar.module.css"
import Login from "../../views/Login/Login";
import Register from "../../views/Register/Register";
import { Link } from "react-router-dom";

const NavBar = () => {
   return (
     <nav>
      <div>
         <Link to="/">HOME</Link>
         <Link to="/mis-turnos">MIS TURNOS</Link>
         <Link to="/about">ABOUT</Link>
         <Link to="/contact">CONTACT</Link>
      </div>
     </nav>
    );
};

export default NavBar