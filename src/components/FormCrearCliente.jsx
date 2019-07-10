import React, { useState } from 'react';
import { sendUser } from '../data/firestore';
import './formCrearCliente.scss';

const FormCrearCliente = () => {
    const[name, setName] = useState('');
    const[apellido, setApellido] = useState('');
    const[edad, setEdad] = useState(0);
    const[nacimiento, setNacimiento] = useState('');

    return(
        <form action="" onSubmit={ (e) => {
            e.preventDefault();
            sendUser(name, apellido, nacimiento, edad);
        }} className="crear-cliente">
            <p className="crear-cliente__p">Ingrese nuevo usuario:</p>
            <input type="text" placeholder="Nombre" onChange={ e => setName(e.currentTarget.value)} className="crear-cliente__input"/>
            <input type="text" placeholder="Apellidos" onChange={ e => setApellido(e.currentTarget.value)} className="crear-cliente__input"/>
            <input type="number" placeholder="Edad" onChange={ e => setEdad(e.currentTarget.value)} className="crear-cliente__input"/>
            <input type="date" placeholder="Fecha de nacimiento" onChange={ e => setNacimiento(e.currentTarget.value)} className="crear-cliente__input"/>
            <input type="submit" className="crear-cliente__submit"/>
        </form>
    )
}

export default FormCrearCliente;