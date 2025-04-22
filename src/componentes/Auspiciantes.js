import React from 'react';
import '../css/Auspiciantes.css';

function Auspiciantes() {
  return (
    <div className="auspiciantes">
      <h1>Auspiciantes</h1>

      <section>
        <h2>Principales</h2>
        <ul className="sponsor-list">
          <li><strong>Ejemplo:</strong> Próximamente..</li>
          <li><strong>Ejemplo:</strong> Próximamente..</li>
        </ul>
      </section>

      <section>
        <h2>Auspiciantes Locales</h2>
        <ul className="sponsor-list">
          <li><strong>Ejemplo:</strong> Próximamente..</li>
          <li><strong>Ejemplo:</strong> Próximamente..</li>
          <li><strong>Ejemplo:</strong> Próximamente..</li>
        </ul>
      </section>

      <section>
        <h2>Condiciones para ser sponsors en el COPAT-AL</h2>
        <div className="separator"></div>

        <h3>¿Por qué ser sponsor en el COPAT-AL?</h3>
        <p>
          Siendo sponsor en el <strong>I Congreso Patagónico de Alimentos 2025</strong> podés posicionar tu marca en el principal encuentro que reúne a la comunidad científico-académica, empresas, productores y emprendedores del sector agroalimentario.
        </p>
        <p>
          Es una forma de darte a conocer mostrando tus productos, servicios y tecnologías en un espacio pensado para crear vínculos estratégicos, generar oportunidades de negocio y potenciar la innovación.
        </p>
        <p>
          Esperamos contar con tu apoyo en este evento que impulsa la conexión entre el conocimiento, el desarrollo empresarial y la evolución de la industria alimentaria.
        </p>

        <h3>¿Cómo ser sponsors del COPAT-AL?</h3>

        <div className="opciones">
          <div className="opcion-card">
            <h4>OPCIÓN 1: STAND FÍSICO</h4>
            <p>
              Stand de 3m x 3m en la sede del Congreso para exhibir productos y/o servicios. Incluye presencia de logos en redes sociales, web y flyers.
            </p>
            <p className="precio">$300.000</p>
          </div>

          <div className="opcion-card">
            <h4>OPCIÓN 2: BANNER</h4>
            <p>
              Espacios específicos para banners o banderas. Incluye presencia de logos en redes sociales, web y flyers.
            </p>
            <p className="precio">$200.000</p>
          </div>

          <div className="opcion-card">
            <h4>OPCIÓN 3: LOGOS EMPRESARIALES</h4>
            <p>
              Presencia de los logos como auspiciantes en redes sociales, web y flyers durante el evento.
            </p>
            <p className="precio">$100.000</p>
          </div>

          <div className="opcion-card">
            <h4>OPCIÓN 4: SPONSOR ESPECIAL</h4>
            <p>
              Presencia de logos y posibilidad de realizar aportes específicos y confidenciales para necesidades del proyecto (equipamiento, transporte, becas, etc.).
            </p>
          </div>
        </div>

        <p className="link-sponsor">
          <strong>👉 Link para participar como sponsor:</strong><br/>
          <a href="https://forms.gle/YkSwquKg9zCkwQ6ZA" target="_blank" rel="noreferrer">
            Completar formulario de inscripción
          </a>
        </p>
      </section>
    </div>
  );
}

export default Auspiciantes;
