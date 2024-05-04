import Home from "./views/Home/Home"
import HomeContent from "./views/HomeContent/HomeContent"
import MisTurnos from "./views/MisTurnos/MisTurnos"
import styles from "./App.module.css"
import NavBar from "./components/NavBar/NavBar"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import { Routes, Route } from "react-router-dom"
import About from "./views/About/About"
import Contact from "./views/Contact/Contact"
import CrearTurno from "./views/CreateTurno/CreateTurno"

function App() {
  return <>
    <Home />
    <NavBar/>
    
    <Routes>
      <Route path="/" element={<HomeContent/>}/>
      <Route path="/mis-turnos" element={<MisTurnos/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/crear-turno" element={<CrearTurno/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </>
}

export default App
