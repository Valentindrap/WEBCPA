import React from 'react';
import '../css/PresentacionTrabajos.css';

function PresentacionTrabajos() {
  return (
    <div className="presentacion-trabajos">
      <h1>Presentación de Trabajos</h1>

      <p>
        En el COPAT-AL se podrán presentar trabajos en formato de Póster. Para eso, se deberá completar el formulario de carga disponible en esta página web.
        Tener en cuenta que cada eje temático posee su formulario de carga de trabajos, por lo cual es importante establecerlo previamente.
      </p>
      <p>
        Cada autor/a inscripto/a podrá presentar como máximo dos trabajos, pudiendo estar como coautor/a en la cantidad de trabajos que desee. Además, no existirá límite establecido para la cantidad de coautores/as en cada trabajo.
        Los resúmenes serán evaluados por el Comité Académico Científico del I COPAT-AL, quien comunicará la correspondiente decisión al presentador del trabajo.
      </p>

      <h2>Instrucciones - Envíos de resúmenes</h2>
      <p>
        Los trabajos serán publicados en la revista: <strong>VETEC. REVISTA ACADÉMICA DE INVESTIGACIÓN, DOCENCIA Y EXTENSIÓN DE LAS CIENCIAS VETERINARIAS</strong>
      </p>

      <h2>Formato</h2>
      <p>
        Los trabajos deberán estar tipeados en Microsoft Word versión 2003 o superior en hoja A4. Margen superior: 3 cm; inferior: 2,5 cm; izquierdo y derecho: 2,5 cm.
        Tipografía: Times New Roman, tamaño 12, justificado, interlineado sencillo. Las abreviaturas deben aclararse la primera vez, salvo las convencionales.
        Las unidades deben estar expresadas según el <a href="https://www.inti.gob.ar/areas/metrologia-y-calidad/si" target="_blank" rel="noreferrer">Sistema Internacional de Medidas</a>.
      </p>

      <h2>Estructura general del artículo</h2>
      <ul>
        <li><strong>Título:</strong> Breve, conciso y en español e inglés.</li>
        <li><strong>Autor/a o autores/as:</strong> Apellido, inicial(es) del nombre. Separados por punto y coma.</li>
        <li><strong>Filiación institucional:</strong> Institución, dirección y correo. Justificado a la izquierda, con superíndices numéricos.</li>
        <li><strong>Resumen:</strong> Hasta 200 palabras. En español e inglés. Sin secciones marcadas.</li>
        <li><strong>Palabras clave:</strong> Hasta cinco, en español e inglés. Consultar <a href="http://aims.fao.org/es/agrovoc" target="_blank" rel="noreferrer">Agrovoc</a>, <a href="http://decs.bvs.br/E/homepagee.htm" target="_blank" rel="noreferrer">DeCS</a>.</li>
      </ul>

      <p>
        Plantilla modelo: <a href="https://docs.google.com/document/d/1_bnm75jgDZd6LoJ4e070ZbLZe_Giwh5P/edit?usp=drive_link" target="_blank" rel="noreferrer">Ver documento</a>
      </p>

      <h2>Fechas importantes</h2>
      <ul>
        <li><strong>Recepción de trabajos:</strong> Desde el 5 de junio hasta el 30 de junio</li>
        <li><strong>Notificación de trabajos aceptados:</strong> A partir del 29 de agosto</li>
        <li><strong>Envío de versión final:</strong> Desde el 29 de agosto hasta el 8 de septiembre</li>
      </ul>

      <h2>Links para la carga de trabajos</h2>
      <ul>
        <li><strong>Eje 1:</strong> Calidad e Innovación en la Industria Alimentaria - <a href="https://forms.gle/oeYvdci6MZhQA4yG8" target="_blank" rel="noreferrer">Formulario</a></li>
        <li><strong>Eje 2:</strong> Nutrición, Salud y Sostenibilidad - <a href="https://forms.gle/SAtAcecg9mAArPMp6" target="_blank" rel="noreferrer">Formulario</a></li>
        <li><strong>Eje 3:</strong> Tecnología Alimentaria y de Procesos - <a href="https://forms.gle/KcWG8meTKHQ9PqLi8" target="_blank" rel="noreferrer">Formulario</a></li>
      </ul>

      <h2>Instrucciones para la presentación de pósters</h2>
      <p>
        Consultar en el programa del I COPAT-AL el día correspondiente. Los/as autores/as deberán estar presentes en el momento de la exposición.
        Tamaño del póster: 0,90 m x 1,20 m. Texto legible a 1 m de distancia. Debe incluir título, autores, institución, e-mail del expositor/a y opcionalmente un QR.
      </p>
      <p>
        Debe incluir objetivos, introducción breve, metodología, resultados y conclusiones. La bibliografía es opcional. El montaje y desmontaje del póster es responsabilidad de los/as autores/as.
      </p>
    </div>
  );
}

export default PresentacionTrabajos;
