import React from 'react';
import '../css/Principal.css';
import fondo from '../img/fondo.jpg';

function Principal() {
  return (
    <div className="principal">
      <div className="banner" style={{ backgroundImage: `url(${fondo})` }}>
        <div className="banner-overlay">
          <h1>PRIMER CONGRESO PATAGÓNICO DE ALIMENTOS (I CoPat-Al)</h1>
          <p className="subtitulo">Analia Schpetter</p>
        </div>
      </div>

      <div className="tarjeta">
        <h2>PRIMER CONGRESO PATAGÓNICO DE ALIMENTOS (I CoPat-Al)</h2>
        <p>
          El Congreso Patagónico de Alimentos es un espacio de encuentro entre instituciones académicas, científicas y la industria alimentaria, 
          con el objetivo de fomentar el desarrollo, la innovación y la colaboración en el sector de los alimentos.
        </p>

        <h3>Fecha y Sede</h3>
        <p><strong>Fecha:</strong> 29 al 31 de octubre de 2025</p>
        <p><strong>Sede:</strong> Facultad de Ciencias Veterinarias UNLPam / MÉDANO / Facultad de Ingeniería</p>

        <h3>Objetivos</h3>
        <ul>
          <li>Establecer vínculos entre instituciones relacionadas con la ciencia y tecnología de alimentos.</li>
          <li>Consolidar una red patagónica de formación en ciencia y tecnología de alimentos.</li>
          <li>Divulgar líneas de investigación, innovación y desarrollo en ciencia y tecnología de alimentos.</li>
        </ul>
      </div>
    </div>
  );
}

export default Principal;
