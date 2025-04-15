import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../img/Size-logo.webp";
import "../css/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 767);
            if (window.innerWidth > 767) {
                setMenuOpen(false); // Cierra el menú en pantallas grandes
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="navbar-container">
             <Link to={"/"}><img src={logo}  className="img-thumbnail nav-logo" alt="logo" /></Link>

            {/* Botón menú hamburguesa en móviles */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </button>

            {/* Contenedor del menú */}
            <div className={`contenedor-navbar ${menuOpen ? "active" : ""}`}>
                <ul className="nav-links text-wrap">
                    {[
                        { path: "/organizadores", label: "Organizadores" },
                        { path: "/cronograma", label: "Programa" },
                        { path: "/inscripciones", label: "Inscripciones" },
                        { path: "/areas-tematicas", label: "Áreas Temáticas" },
                        { path: "/presentacion-trabajos", label: "Presentación de Trabajos" },
                        { path: "/InformacionGeneral", label: "Información General" },
                        { path: "/Auspiciantes", label: "Auspiciantes" }
                    ].map((item, index) => (
                        <motion.li
                            key={item.path}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.3 }}
                        >
                            <Link to={item.path} onClick={() => setMenuOpen(false)}>
                                {item.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
