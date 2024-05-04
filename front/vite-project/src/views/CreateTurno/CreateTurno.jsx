import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const CrearTurno = () => {
  const user = useSelector((state) => state.user.value);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/'); 
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!user) {
        throw new Error('No hay un usuario logueado');
      }

      if (!formData.date || !formData.time) {
        throw new Error('Por favor complete todos los campos');
      }

      const response = await axios.post('http://localhost:3000/turns/schedule', {
        userId: user.user.id,
        date: formData.date,
        time: formData.time,
      });

      console.log('Turno creado:', response.data);
      navigate('/mis-turnos');
      
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h2>Crear Turno</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Hora:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Crear Turno</button>
      </form>
    </div>
  );
};

export default CrearTurno;
