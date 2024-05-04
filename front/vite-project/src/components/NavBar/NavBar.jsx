import Styles from "./NavBar.module.css"
import { Link } from "react-router-dom";

const NavBar = () => {
   return (
     <nav>
      <div>
         <Link to="/">HOME</Link>
         <Link to="/mis-turnos">MIS TURNOS</Link>
         <Link to="/about">ABOUT</Link>
         <Link to="/contact">CONTACT</Link>
         <Link to="/crear-turno">CREAR TURNO</Link>
         <Link to="/register">REGISTER</Link>
         <Link to="/login">LOGIN</Link>
      </div>
     </nav>
    );
};

export default NavBar