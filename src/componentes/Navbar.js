import React from "react";
import logo from "../img/logo.png";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            
            <nav className="navbar-container">
                <img src={logo} className="img-thumbnail nav-logo" alt="logo" />
                <div className="contenedor-navbar">
                    <ul className="nav-links">
                        <Link to={'/'}><li><a href="#">Inicio</a></li></Link>
                        <Link to={'/organizadores'}><li><a href="#">Organizadores</a></li></Link>
                        <Link to={'/cronograma'}><li><a href="#">Cronograma</a></li></Link>
                        <Link to={'/inscripciones'}><li><a href="#">Inscripciones</a></li></Link>
                        <Link to={'/areas-tematicas'}><li><a href="#">Áreas Temáticas</a></li></Link>
                        <Link to={'/presentacion-trabajos'}><li><a href="#">Presentación de Trabajos</a></li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;