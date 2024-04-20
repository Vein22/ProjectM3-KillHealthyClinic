
const Turno = ({date, time, userId, status}) => {
    return (
        <div>
            <h4>User ID: {userId}</h4>
            <h4>Hora: {date}</h4>
            <h4>Fecha: {time}</h4>
            <h4>Status: {status}</h4>
            <button disabled={status == "cancelled"}>Cancelar Turno</button>
        </div>
    )
};

export default Turno;