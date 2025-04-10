import React from 'react';
import '../css/InformacionGeneral.css';

function InformacionGeneral() {
  return (
    <div className="informacion-general">
      <h1>Información General</h1>

      <section>
        <h2>Cómo Llegar</h2>
        <p>
          General Pico se encuentra en la provincia de La Pampa, Argentina. Se puede acceder por Ruta Nacional 188 y Ruta Provincial 1. También cuenta con terminal de ómnibus y aeropuerto cercano.
        </p>
      </section>

      <section>
        <h2>Alojamientos</h2>
        <ul>
          <li><strong>General Pico:</strong> Hoteles, departamentos y hospedajes en distintos puntos de la ciudad.</li>
          <li><strong>Intendente Alvear:</strong> A 45 km de Pico, con alojamientos tranquilos y accesibles.</li>
          <li><strong>Eduardo Castex:</strong> Alternativa intermedia, ideal si se viaja en vehículo.</li>
          <li><strong>Santa Rosa:</strong> Capital de la provincia, con amplia oferta hotelera (a 130 km).</li>
        </ul>
      </section>

      <section>
        <h2>Teléfonos Útiles</h2>
        <ul>
          <li><strong>Emergencias:</strong> 911</li>
          <li><strong>Hospital Gobernador Centeno:</strong> (02302) 421500</li>
          <li><strong>Terminal de Ómnibus:</strong> (02302) 428646</li>
          <li><strong>Turismo General Pico:</strong> (02302) 436400</li>
        </ul>
      </section>

      <section>
        <h2>Información Turística</h2>
        <p>
          Para más información turística podés visitar:
        </p>
        <ul>
          <li><a href="https://www.generalpico.gov.ar/ciudad/turismo" target="_blank" rel="noreferrer">Sitio Oficial de la Municipalidad de General Pico</a></li>
          <li><a href="https://www.instagram.com/disfrutapico" target="_blank" rel="noreferrer">@DisfrutaPico en Instagram</a></li>
        </ul>
      </section>
    </div>
  );
}

export default InformacionGeneral;
