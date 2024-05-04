import { useEffect, useState } from "react";
import Turno from "../../components/Turno/Turno";
import axios from "axios";
import Styles from "./MisTurnos.module.css"
import { useSelector, useDispatch  } from "react-redux";
import { selectUserAppointments, setUserAppointments } from "../../redux/appointmentsSlice";
import { useNavigate } from 'react-router-dom';
import { selectUser } from "../../redux/userSlice";

const MisTurnos = () => {
    const user = useSelector((state) => state.user.value);
    const turnos = useSelector((state) => state.appointments);
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserAppointments = async () => {
          if (!user) {
            navigate("/");
          } else {
            try {
                const userId = user.user.id;
                const response = await axios.get(`http://localhost:3000/turns/${userId}`);
                dispatch(setUserAppointments(response.data));
            } catch (error) {
                console.error("Error al obtener los turnos:", error);
            }
        }
    };
    
    fetchUserAppointments();
}, [user, navigate, dispatch]);


  return (
        <>
            <div className={Styles.tituloH1}>
                <h1>Mis Turnos</h1>
            </div>
            {turnos.length === 0 ? (
                <div className={Styles.noTurns}><h1>No hay turnos disponibles</h1></div>
            ) : (
                <>
                    <div className={Styles.tituloH3}>
                        <h3>Estos son los turnos del usuario</h3>
                    </div>
                    <div className={Styles.container}>
                        {turnos.map((turno, index) => (
                            <Turno
                                key={index}
                                id={turno.id}
                                userId={turno.userId}
                                date={turno.date}
                                time={turno.time}
                                status={turno.status}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};
;


export default MisTurnos;