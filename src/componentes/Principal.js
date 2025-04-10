import React from 'react';
import '../css/Principal.css';
import fondo from '../img/Banner.webp';

function Principal() {
  return (
    <div className="principal">
      <div className="banner" style={{ backgroundImage: `url(${fondo})` }}>

      </div>

      <div className="tarjeta">
        <p>
          <strong>El Congreso Patagónico de Alimentos</strong> es un espacio de encuentro entre instituciones académicas, científicas y la industria alimentaria, 
          con el objetivo de fomentar el desarrollo, la innovación y la colaboración en el sector de los alimentos.
        </p>

        <h3>Fecha y Sede</h3>
        <p><strong>Fecha:</strong> 29 al 31 de octubre de 2025</p>
        <p><strong>Sede:</strong> Facultad de Ciencias Veterinarias UNLPam / MÉDANO / Facultad de Ingeniería</p>

        <h3>Objetivos</h3>
        <ul>
          <li>Establecer vínculos entre las instituciones relacionadas al área de la ciencia y tecnología de
          alimentos y la industria alimentaria.</li>
          <li>Consolidar una red patagónica de instituciones de formación en el área de la ciencia y
          tecnología de alimentos.</li>
          <li>Divulgar las líneas de investigación, innovación y desarrollo de la ciencia y tecnología de
          alimentos.</li>
        </ul>
      </div>
    </div>
  );
}

export default Principal;
