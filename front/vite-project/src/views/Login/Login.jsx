import axios from "axios";
import React, { useState } from "react";
import Styles from "./Login.module.css"

const Login = () => {
    
        const [form, setForm] = useState({
            username: "",
            password: ""
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
    
            if (form.username && form.password) {
                axios.post("http://localhost:3000/users/login", form)
                    .then(response => {
                        console.log("Inicio de sesión exitoso:", response.data);
                    })
                    .catch(error => {
                        console.error("Error en inicio de sesión:", error);
                    });
            } else {
                console.log("Por favor complete todos los campos.");
            }
        };
    
        return (
            <div className={Styles.container}>
            <form onSubmit={handleSubmit}>
                <div className={Styles.inputGroup}>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input 
                        type="text" 
                        id="usernameLogin" 
                        name="username" 
                        value={form.username} 
                        onChange={handleChange} 
                    />
                </div>
                <div className={Styles.inputGroup}>
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="passwordLogin" 
                        name="password" 
                        value={form.password} 
                        onChange={handleChange} 
                    />
                </div>
                <button className={Styles.btnSubmit} type="submit">Iniciar sesión</button>
            </form>
            </div>
        );
    };
    

export default Login;