import React from 'react';
import '../css/Cronograma.css';

function Cronograma() {
  return (
    <div className="cronograma">
      <h1>Cronograma</h1>
      <p>A continuación se detalla el cronograma de actividades del congreso.</p>

      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Actividad</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>29 de octubre</td>
            <td>Acreditaciones</td>
            <td>08:00 - 10:00</td>
          </tr>
          <tr>
            <td>29 de octubre</td>
            <td>Conferencia Inaugural</td>
            <td>10:30 - 12:00</td>
          </tr>
          <tr>
            <td>30 de octubre</td>
            <td>Mesas temáticas</td>
            <td>09:00 - 17:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cronograma;
