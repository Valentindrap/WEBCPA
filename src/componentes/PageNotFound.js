import React from 'react';
import { Link } from 'react-router-dom';
import '../css/PageNotFound.css';
import fondo from '../img/Banner.webp';

function PageNotFound() {
  return (
    <div className="notfound-principal">
      <div className="notfound-banner">
        <div className="notfound-banner-overlay">
          <h1>404 - Página no encontrada</h1>
          <p>Lo sentimos, esta página no existe.</p>
          <Link to="/" className="notfound-btn">Volver al inicio</Link>
        </div>
      </div>

      <div className="notfound-tarjeta">
        <h3>¿Qué pudo haber pasado?</h3>
        <ul>
          <li>La dirección URL está mal escrita.</li>
          <li>La página fue movida o eliminada.</li>
          <li>No tenés acceso al recurso solicitado.</li>
        </ul>
      </div>
    </div>
  );
}

export default PageNotFound;
