import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const NavBar = () => {
    return(
        <header className="header">
            <h1>INTERCORP RETAIL</h1>
            <nav className="header__nav">
                <Link to="/"><p className="header__nav--p">Ingresar usuario</p></Link>
                <Link to="/usuarios/"><p className="header__nav--p">Usuarios Registrados</p></Link>
                <Link to="/calculos/"><p className="header__nav--p">Cálculos Usuarios</p></Link>
            </nav>
        </header>
    )
}

export default NavBar;