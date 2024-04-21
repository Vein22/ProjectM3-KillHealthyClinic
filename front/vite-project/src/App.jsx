import { BrowserRouter } from "react-router-dom"
import Home from "./views/Home/Home"
import MisTurnos from "./views/MisTurnos/MisTurnos"
import styles from "./App.module.css"
import NavBar from "./components/NavBar/NavBar"

function App() {
  return <>
    <Home />
    <NavBar/>
    <MisTurnos />
  </>
}

export default App
