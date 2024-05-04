import React, { useState } from "react";
import axios from "axios";
import Styles from "./Register.module.css"


const Register = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        birthdate: "",
        nDni: "",
        username: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.name && form.email && form.password && form.birthdate && form.nDni && form.username) {
            axios.post("http://localhost:3000/users/register", form)
                .then(response => {
                    console.log("Registro exitoso:", response.data);
                })
                .catch(error => {
                    console.error("Error al registrar usuario:", error);
                });
        } else {
            console.log("Por favor complete todos los campos.");
        }
    };


    
    return (
        <div className={Styles.container}>
        <form onSubmit={handleSubmit}>
            <div className={Styles.inputGroup}>
                <label htmlFor="name">Nombre:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                />
            </div>
            <div className={Styles.inputGroup}>
                <label htmlFor="email">Correo electrónico:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handleChange} 
                />
            </div>
            <div className={Styles.inputGroup}>
                <label htmlFor="password">Contraseña:</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={form.password} 
                    onChange={handleChange} 
                />
            </div>
            <div className={Styles.inputGroup}>
                <label htmlFor="birthdate">Fecha de Nacimiento:</label>
                <input 
                    type="number" 
                    id="birthdate" 
                    name="birthdate" 
                    value={form.birthdate} 
                    onChange={handleChange} 
                />
            </div>
            <div className={Styles.inputGroup}>
                <label htmlFor="nDni">Número de DNI:</label>
                <input 
                    type="text" 
                    id="nDni" 
                    name="nDni" 
                    value={form.nDni} 
                    onChange={handleChange} 
                />
            </div>
            <div className={Styles.inputGroup}>
                <label htmlFor="username">Nombre de usuario:</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={form.username} 
                    onChange={handleChange} 
                />
            </div>
            <button className={Styles.btnSubmit} type="submit">Registrarse</button>
        </form>
        </div>
        
    );
};

export default Register;