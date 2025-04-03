import React from 'react';
import '../css/AreasTematicas.css';

function AreasTematicas() {
  return (
    <div className="areas-tematicas">
      <h1>Áreas Temáticas</h1>
      <br></br>
      <ul>
        <li>
          <h2>Calidad e Innovación en la Industria Alimentaria</h2>
          <p>Un enfoque en la mejora de la calidad e inocuidad de los alimentos, así como el desarrollo de productos innovadores que respondan a las tendencias de consumo actuales.</p>
          <ul>
            <li>Desarrollo de nuevos productos</li>
            <li>Normativa, calidad de alimentos y seguridad alimentaria</li>
            <li>Nuevas tendencias alimentarias</li>
          </ul>
        </li>

        <li>
          <h2>Nutrición, Salud y Sostenibilidad</h2>
          <p>Explora la relación entre la alimentación y la salud, promoviendo la educación nutricional y el consumo de alimentos que contribuyan a un estilo de vida saludable y sostenible.</p>
          <ul>
            <li>Vinculación salud y alimentación</li>
            <li>Intervenciones educativas en ciencia y tecnología de alimentos</li>
            <li>Promoción del consumo de alimentos saludables</li>
            <li>Análisis cuantitativo de nutrientes</li>
            <li>Reducción de desperdicios</li>
            <li>Accesibilidad a alimentos saludables</li>
            <li>Influencia de factores ambientales, sociales, económicos y políticos en la producción de alimentos</li>
          </ul>
        </li>

        <li>
          <h2>Tecnología Alimentaria y de Procesos</h2>
          <p>Desarrollo de procesos y tecnologías que transforman la producción, conservación y distribución de alimentos.</p>
          <ul>
            <li>Alimentos fermentados y microbiología de los alimentos</li>
            <li>Biotecnología de alimentos</li>
            <li>Conservación, almacenamiento y distribución sostenible</li>
            <li>Modelado matemático, simulación y optimización de procesos de la industria alimentaria</li>
            <li>Internet de las Cosas (IoT), IA aplicada a la industria de alimentos e Industria 4.0</li>
            <li>Nanotecnología</li>
          </ul>
        </li>
      </ul>
    </div>


  );
}

export default AreasTematicas;
