import React from 'react';
import '../css/Footer.css';
import UNLPam from "../img/Unis/UNLPam.webp"
import Chubut from "../img/Unis/Chubut.webp"
import Comahue from "../img/Unis/Comahue.webp"
import UTN from "../img/Unis/UTN.webp"
import RioNegro from "../img/Unis/Rio-negro.webp"


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logos">
        {/* <img src={Chubut} alt="UNLPam" className="logo-unlpam" />
        <img src={Comahue} alt="UNRN" className="logo-unrn" />
        <img src={UNLPam} alt="UTN" className="logo-utn" />
        <img src={RioNegro} alt="UNCo" className="logo-unco" />
        <img src={UTN} alt="logo" className="logo-udc" /> */}
      </div>
      <p className="footer-derechos">
        © {new Date().getFullYear()} Universidad Nacional de La Pampa. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
