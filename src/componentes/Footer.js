import React from 'react';
import '../css/Footer.css';
import Facta from "../img/Unis/Facta.webp"
import AgroUNRN from "../img/Unis/Agroindustrial_UNRN.webp"
import RegionalChubut from "../img/Unis/Regional_Chubut.webp"
import TecUNRN from "../img/Unis/tecnologia_UNRN.webp"
import UNLPAMV from "../img/Unis/UNLPam-_veterinarias.webp"
import UNLPAMA from "../img/Unis/UNLPam_agronomía.webp"
import RegionalTierra from "../img/Unis/Facultad_Regional_de_Tierra_del_Fuego.webp"
import Chubut from "../img/Unis/Chubut.webp"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src={Facta} alt="Facta" className="logo-unlpam" />
        <img src={AgroUNRN} alt="Agroindustrial UNRN" className="logo-unlpam" />
        <img src={RegionalChubut} alt="Facultad Regional Chubut" className="logo-unlpam" />
        <img src={UNLPAMA} alt="Agronomía UNLPam" className="logo-unlpam" />
        <img src={TecUNRN} alt="Tecnología UNRN" className="logo-unlpam" />
        <img src={Chubut} alt="Chubut" className="logo-unlpam" />
        <img src={UNLPAMV} alt="Veterinarias UNLPam" className="logo-unlpam" />
        <img src={RegionalTierra} alt="Facultad Regional Tierra del Fuego" className="logo-unlpam" />

      </div>
      <p className="footer-derechos">
        © {new Date().getFullYear()} Universidad Nacional de La Pampa. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
