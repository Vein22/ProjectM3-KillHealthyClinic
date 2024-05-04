import axios from 'axios';
import React from 'react';


const CancelarTurno = ({ id, onCancelarTurno, disabled  }) => {
    const handleCancelarTurno = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/turns/cancel/${id}`);
            if (response.status === 200) {
                onCancelarTurno(id);
            } else {
                console.error("Error al cancelar el turno:", response.data.message);
            }
        } catch (error) {
            console.error("Error al cancelar el turno:", error);
        }
    };

    return (
        <div>
            <button onClick={handleCancelarTurno} disabled={disabled}>Cancelar Turno</button>
        </div>
    );
};

export default CancelarTurno;