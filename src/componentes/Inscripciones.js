import React from 'react';
import '../css/Inscripciones.css';

function Inscripciones() {
  return (
    <div className="inscripciones">
      <h1>Inscripciones</h1>
      <p>En esta página iría la información o el Google Form de inscripción</p>

      <h2>Aranceles</h2>
      <ul>
        <li>
          <strong>Estudiantes universitarios (pregrado-grado):</strong> Entrada libre y gratuita.
        </li>
        <br></br>
        <li>
          <strong>Estudiantes universitarios de posgrado / Docentes y/o Investigadores:</strong> $40.000 hasta el mes de junio y $60.000 del mes de junio en adelante.
        </li>
        <br></br>
        <li>
          <strong>Público general:</strong> $50.000 hasta el mes de junio y $70.000 del mes de junio en adelante.
        </li>
      </ul>

      <h2>Inscripciones con el Formulario de Inscripción</h2>

      <h2>Formulario de Facturación</h2>
    </div>
  );
}

export default Inscripciones;
