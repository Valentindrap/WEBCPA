import React from 'react';
import '../css/PresentacionTrabajos.css';

function PresentacionTrabajos() {
  return (
    <div className="presentacion-trabajos">
      <h1>Presentación de Trabajos</h1>
      <p>Los participantes podrán enviar sus trabajos científicos para ser presentados en formato de póster o ponencia.</p>

      <h2>Fechas Importantes</h2>
      <ul>
        <li><strong>Recepción de trabajos:</strong> Hasta el 15 de septiembre</li>
        <li><strong>Notificación de aceptación:</strong> 30 de septiembre</li>
        <li><strong>Envío de versión final:</strong> 10 de octubre</li>
      </ul>

      <h2>Requisitos de Envío</h2>
      <p>Los trabajos deben cumplir con las normas establecidas por el comité organizador.</p>
    </div>
  );
}

export default PresentacionTrabajos;
