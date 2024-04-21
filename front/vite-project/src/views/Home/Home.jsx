import NavBar from "../../components/NavBar/NavBar";
import Logo from "../../assets/HeaderLogo.png"
import Styles from "./Home.module.css"

const Home = () => {
    return (
        <>
        <header>
            <h1 className={Styles.HomeH1}>KillHealthy Clinic</h1>
            <img src={Logo} alt="Caduceo" />
        </header>
        </>
    );
};

export default Home