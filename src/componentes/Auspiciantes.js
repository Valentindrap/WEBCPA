import React from 'react';
import '../css/Auspiciantes.css';


// Importación de imágenes
import pico from '../img/auspiciantes/Municipalidad de Pico.webp';
import alvear from '../img/auspiciantes/Municipalidad Alvear.webp';
import heguy from '../img/auspiciantes/Logo Heguy.webp';
import cascada from '../img/auspiciantes/la cascada agua .webp';
import hotel from '../img/auspiciantes/HOTEL PICO.webp';
import fedea from '../img/auspiciantes/FEDEA_newLogo-01.webp';
import rojas from '../img/auspiciantes/chacinadosrojas.webp';
import brupal from '../img/auspiciantes/brupal.webp';
import alarcia from '../img/auspiciantes/alarcia.webp';
import chilito from '../img/auspiciantes/chilito.webp';
import LoobStudio from '../img/auspiciantes/LoobStudio.webp';
import Citia from '../img/auspiciantes/citia.webp';
import ICOMEX from '../img/auspiciantes/ICOMEX.webp';
import Granos from '../img/auspiciantes/Granos del oeste.webp';
import pelayo from '../img/auspiciantes/pelayo.webp'


function Sponsors() {
  return (
    <div className="auspiciantes" translate="no">
      <h1>Auspiciantes</h1>

      <div className="intro-sponsors">
        <h2><strong>Empresas e Instituciones que nos acompañan en el I COPAT-AL</strong></h2>
        <p>
          Agradecemos profundamente el respaldo de quienes hacen posible este evento. <strong>Sumate</strong> como auspiciante y sé parte de una iniciativa única que conecta la innovación, la ciencia y la industria alimentaria.
        </p>
      </div>

      <div className="sponsors-grid">
        <div className="logo-box"><img src={pico} alt="Municipalidad de Pico" /></div>
        <div className="logo-box"><img src={alvear} alt="Municipalidad de Alvear" /></div>
        <div className="logo-box"><img src={heguy} alt="Logo Heguy" /></div>
        <div className="logo-box"><img src={cascada} alt="La Cascada Agua" /></div>
        <div className="logo-box"><img src={hotel} alt="Hotel Pico" /></div>
        <div className="logo-box"><img src={fedea} alt="FEDEA" /></div>
        <div className="logo-box"><img src={rojas} alt="Chacinados Rojas" /></div>
        <div className="logo-box"><img src={brupal} alt="Brupal" /></div>
        <div className="logo-box"><img src={alarcia} alt="Alarcia" /></div>
        <div className="logo-box"><img src={chilito} alt="chilito" /></div>
        <div className="logo-box"><a href='https://loobstudio.netlify.app/' target='_BLANK'><img src={LoobStudio} alt="LoobStudio"/></a></div>
        <div className="logo-box"><img src={Citia} alt="Citia" /></div>
        <div className="logo-box"><img src={ICOMEX} alt="ICOMEX" /></div>
        <div className="logo-box"><img src={Granos} alt="Granos del oeste S.A." /></div>
        <div className="logo-box"><img src={pelayo} alt="Pelayo" /></div>
      </div>

      <section className="condiciones-sponsor">
        <h2>Condiciones para ser sponsors en el I COPAT-AL</h2>
        <div className="separator"></div>

        <h3>¿Por qué ser sponsor en el I COPAT-AL?</h3>
        <p>
          Siendo sponsor en el <strong>I Congreso Patagónico de Alimentos 2025</strong> podés posicionar tu marca en el principal encuentro que reúne a la comunidad científico-académica, empresas, productores y emprendedores del sector agroalimentario.
        </p>
        <p>
          Es una forma de darte a conocer mostrando tus productos, servicios y tecnologías en un espacio pensado para crear vínculos estratégicos, generar oportunidades de negocio y potenciar la innovación.
        </p>
        <p>
          Esperamos contar con tu apoyo en este evento que impulsa la conexión entre el conocimiento, el desarrollo empresarial y la evolución de la industria alimentaria.
        </p>

        <h3>¿Cómo ser sponsors en el I COPAT-AL?</h3>

        <div className="opciones">
          <div className="opcion-card">
            <h4>OPCIÓN 1: STAND FÍSICO</h4>
            <p>
              Stand de 3m x 3m en la sede del Congreso para exhibir productos y/o servicios. Incluye presencia de logos en redes sociales, web y flyers.
            </p>
          </div>

          <div className="opcion-card">
            <h4>OPCIÓN 2: BANNER</h4>
            <p>
              Espacios específicos para banners o banderas. Incluye presencia de logos en redes sociales, web y flyers.
            </p>
          </div>

          <div className="opcion-card">
            <h4>OPCIÓN 3: LOGOS EMPRESARIALES</h4>
            <p>
              Presencia de los logos como auspiciantes en redes sociales, web y flyers durante el evento.
            </p>
          </div>

          <div className="opcion-card">
            <h4>OPCIÓN 4: SPONSOR ESPECIAL</h4>
            <p>
              Presencia de logos y posibilidad de realizar aportes específicos y confidenciales para necesidades del proyecto (equipamiento, transporte, becas, etc.).
            </p>
          </div>
        </div>

        <p className="link-sponsor">
          <strong>👉 Link para participar como sponsor:</strong><br />
          <a href="https://forms.gle/YkSwquKg9zCkwQ6ZA" target="_blank" rel="noreferrer">
            Completar formulario de inscripción
          </a>
        </p>
      </section>
    </div>
  );
}

export default Sponsors;
