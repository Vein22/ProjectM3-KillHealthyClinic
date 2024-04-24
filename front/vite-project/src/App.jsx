import { BrowserRouter } from "react-router-dom"
import Home from "./views/Home/Home"
import MisTurnos from "./views/MisTurnos/MisTurnos"
import styles from "./App.module.css"
import NavBar from "./components/NavBar/NavBar"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"

function App() {
  return <>
    <Home />
    <NavBar/>
    <MisTurnos />

    <div className={styles.Register}>
      <Register />
    </div>
      <Login />
  </>
}

export default App
