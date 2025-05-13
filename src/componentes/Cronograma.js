import React, { useState, useEffect } from 'react';
import '../css/Cronograma.css';

import disertante1 from '../img/Disertantes/Dr. Claudio Fabián Narambuena.png';
import disertante2 from '../img/Disertantes/Dra. Carmen Martínez Graciá.png';
import disertante3 from '../img/Disertantes/Dra. Marina Arrieta.png';
import disertante4 from '../img/Disertantes/Dra. Viola Ana.png';
import disertante5 from '../img/Disertantes/Julieta Fernández Madero.png';
import disertante6 from '../img/Disertantes/Lic. Gabriela Benavidez.png';
import disertante7 from '../img/Disertantes/Lic. Lorena Allemandi.png';
import disertante8 from '../img/Disertantes/Lic. Mariela Dalla Vía.png';
import disertante9 from '../img/Disertantes/Lic.Valentina Lancioni.png';
import disertante10 from '../img/Disertantes/Mg. Marcela Carignani.png';

function Cronograma() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const handleImageClick = (src) => {
    setCurrentImg(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImg(null);
  };

  // Prevent background scroll when modal open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
  }, [modalOpen]);

  const disertantesPrimera = [disertante1, disertante3, disertante4, disertante8, disertante5, disertante6, disertante7, disertante2, disertante9];
  const disertantesSegunda = [disertante10];

  return (
    <div className="cronograma">
      <h1>Programa</h1>
      <p>
      El I COPAT-AL ofrecerá una agenda diversa compuesta por conferencias plenarias, espacios de reflexión y acción, y presentaciones de trabajos en formato póster.
      </p>

      <h2 className="text-center mt-5 mb-3">DISERTANTES: CONFERENCIAS PLENARIAS</h2>
      <div className="container">
      <div className="row flex-column align-items-center">
        {disertantesPrimera.map((img, idx) => (
          <div className="col-12 col-sm-10 mb-4" key={idx}>
              <div className="card card-disertante h-100">
                <img
                  src={img}
                  className="card-img-top disertante-img"
                  alt={`Conferencista ${idx + 1}`}
                  onClick={() => handleImageClick(img)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="row segunda-columna flex-column align-items-center">
          {disertantesSegunda.map((img, idx) => (
            <div className="col-12 col-sm-10 mb-4" key={idx}>
              <div className="card card-disertante  h-100">
                <img
                  src={img}
                  className="card-img-top disertante-img"
                  alt={`Conferencista ${idx + 1}`}
                  onClick={() => handleImageClick(img)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {modalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={currentImg} alt="Ampliada" />
        </div>
      )}



      <h2>ESPACIOS DE REFLEXIÓN Y ACCIÓN</h2>

      <div className="mesa">
        <h3>Mesa 1: “De la Investigación a la Innovación: Nuevas Fronteras en la Industria de Alimentos”</h3>
        <p>
          <strong>Objetivo:</strong> Reunir experiencias que muestren cómo la investigación científica, la innovación de productos y las tecnologías emergentes están transformando la cadena de valor de los alimentos, desde su desarrollo hasta su industrialización y distribución.
        </p>

        <h3>Mesa 2: “Construyendo Sistemas Alimentarios Saludables y Sostenibles: Desafíos y Oportunidades en Contextos Locales”</h3>
        <p>
          <strong>Objetivo:</strong> Generar un espacio de reflexión y debate sobre cómo construir sistemas alimentarios accesibles, saludables y sostenibles adaptados a los desafíos y características locales. Analizar las interacciones entre políticas públicas, la producción alimentaria, el consumo responsable y la educación nutricional. Discutir cómo fomentar la soberanía alimentaria en la región y reducir el desperdicio alimentario en todos los eslabones de la cadena.
        </p>

        <h3>Mesa 3: “Propuestas innovadoras en la enseñanza de la Ciencia y Tecnología de los Alimentos”</h3>
        <p>
          <strong>Objetivo:</strong> Promover el intercambio y socialización de experiencias pedagógicas y prácticas educativas innovadoras en la enseñanza de la Ciencia y Tecnología de los Alimentos. Fomentar y proponer acciones de enseñanza interdisciplinarias e interinstitucionales.
        </p>

        <h3>Mesa 4: “Experiencias que Inspiran: Ciencia, Industria y Territorio en Acción”</h3>
        <p>
          <strong>Objetivo:</strong> Visibilizar casos de éxito de empresas patagónicas, identificar desafíos comunes y explorar oportunidades para fortalecer la articulación entre el sector productivo, la investigación y el desarrollo territorial.
        </p>
      </div>
    </div>
  );
}

export default Cronograma;
