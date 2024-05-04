import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelTurno } from '../../redux/appointmentsSlice';
import CancelarTurno from '../../views/CancelarTurno/CancelarTurno';
import Style from "./Turno.module.css"

const Turno = ({ id, date, time, userId, status }) => {
    const dispatch = useDispatch();

    const handleCancelarTurno = async (turnoId) => {
        try {
            await dispatch(cancelTurno({ turnoId })); 
        } catch (error) {
            console.error("Error al cancelar el turno:", error);
        }
    };

    const statusClassName = status === "active" ? Style.active : Style.cancelled;
    const isCancelled = status === "cancelled";

    return (
        <div className={Style.container}>
            <h4>User ID: {userId}</h4>
            <h4>Hora: {time}</h4>
            <h4>Fecha: {date}</h4>
            <h4 className={`${statusClassName}`}>Status: {status}</h4>
            <CancelarTurno id={id} onCancelarTurno={handleCancelarTurno} disabled={isCancelled} />
        </div>
    )
};

export default Turno;