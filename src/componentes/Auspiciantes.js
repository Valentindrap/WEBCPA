import React from 'react';
import '../css/Auspiciantes.css';

function Auspiciantes() {
  return (
    <div className="auspiciantes">
      <h1>Auspiciantes</h1>

      <section>
        <h2>Principales</h2>
        <ul>
          <li><strong>LoobStudio:</strong> Desarrollo web y soluciones digitales. <a href="https://loobstudio.netlify.app/" target="_blank" rel="noreferrer">Visitar sitio</a></li>
          <li><strong>Ejemplo:</strong> Proximamente..</li>
          <li><strong>Ejemplo:</strong> Proximamente..</li>
        </ul>
      </section>

      <section>
        <h2>Auspiciantes Locales</h2>
        <ul>
          <li><strong>Ejemplo:</strong> Proximamente..</li>
          <li><strong>Ejemplo:</strong> Proximamente..</li>
          <li><strong>Ejemplo:</strong> Proximamente..</li>
        </ul>
      </section>

      <section>
        <h2>Cómo ser Auspiciante</h2>
        <p>
          Si querés que tu empresa o emprendimiento forme parte de nuestros auspiciantes, podés comunicarte a través de nuestro correo electrónico: 
          <a href="mailto:contacto@eventopico.com"> contacto@eventopico.com</a> o enviarnos un mensaje por <a href="https://wa.me/5492302456789" target="_blank" rel="noreferrer">WhatsApp</a>.
        </p>
      </section>
    </div>
  );
}

export default Auspiciantes;
