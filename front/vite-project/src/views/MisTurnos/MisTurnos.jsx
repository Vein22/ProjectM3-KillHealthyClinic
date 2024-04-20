import { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import axios from "axios";

const MisTurnos = () => {

    const [turnos, setTurnos] = useState([]);

    useEffect(()=> {
        axios.get("http://localhost:3000/turns").then(res=> setTurnos(res.data))
    }, [])

    return (
    <>
        <h1>Mis Turnos</h1>
        <h3>Estos son los turnos del usuarios</h3>
         
        <div>
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