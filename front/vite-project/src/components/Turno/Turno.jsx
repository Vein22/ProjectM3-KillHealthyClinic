import Style from "./Turno.module.css"

const Turno = ({date, time, userId, status}) => {

    const statusClassName = status === "active" ? Style.active : Style.cancelled;

    return (
        <div className={Style.container}>
            <h4>User ID: {userId}</h4>
            <h4>Hora: {time}</h4>
            <h4>Fecha: {date}</h4>
            <h4 className={`${statusClassName}`}>Status: {status}</h4>
            <button disabled={status == "cancelled"}>Cancelar Turno</button>
        </div>
    )
};


export default Turno;