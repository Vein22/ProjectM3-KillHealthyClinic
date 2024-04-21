import { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import axios from "axios";
import Style from "./MisTurnos.module.css"

const MisTurnos = () => {

    const [turnos, setTurnos] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:3000/turns").then(res=> setTurnos(res.data))
    }, [])

    return (
    <>

    <div className={Style.tituloH1}>
        <h1>Mis Turnos</h1>
    </div>
    <div className={Style.tituloH3}>
        <h3>Estos son los turnos del usuarios</h3>
    </div>
         
        <div className={Style.container}>
        {turnos.map((turno, index) => (
            <Turno
            key={index}
            userId={turno.userId}
            date={turno.date}
            time={turno.time}
            status={turno.status}
            />
            ))}
        </div>
    </>
    );
};

export default MisTurnos;