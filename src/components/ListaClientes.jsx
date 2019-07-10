import React from 'react';
import { useFirebase } from '../data/firestore';
import './listaclientes.scss';

const ListaClientes = () => {

    const user = useFirebase();

    return(
        <div className="container lista-clientes">        
            <div className="row lista-clientes__cabecera">
                <span className="lista-clientes__cabecera--text col-2">NOMBRE</span>
                <span className="lista-clientes__cabecera--text col-3">APELLIDO</span>
                <span className="lista-clientes__cabecera--text col-2">EDAD</span>
                <span className="lista-clientes__cabecera--text col-3">FECHA DE NACIMIENTO</span>
            </div>
            {
                user.map( p => (
                    <div className="row lista-clientes__user" key={user.id}>
                        <span className="lista-clientes__cabecera--text col-2">{p.nombre}</span>
                        <span className="lista-clientes__cabecera--text col-3">{p.apellido}</span>
                        <span className="lista-clientes__cabecera--text col-2">{p.edad}</span>                        
                        <span className="lista-clientes__cabecera--text col-2">{p.nacimiento}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ListaClientes;