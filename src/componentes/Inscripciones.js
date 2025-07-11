import React from 'react';
import '../css/Inscripciones.css';

function Inscripciones() {
  return (
    <div className="inscripciones">
      <h1>Inscripciones</h1>

      <p>
        En este espacio encontrarás toda la información necesaria para la inscripción al I COPAT-AL. 
        Es importante saber que para poder inscribirse al Congreso deberán contar con el certificado 
        de estudiante regular en caso de ser estudiante universitario de pregrado o grado; o el 
        comprobante de pago en caso de tratarse de estudiantes universitarios de posgrado, Docentes 
        y/o Investigadores y público en general.
      </p>

      <h2>Aranceles</h2>
      <ul>
        <li>
          <strong>Estudiantes universitarios (pregrado-grado):</strong> inscripción libre y gratuita. Solo tienen que adjuntar el certificado de estudiante regular.
        </li>
        <br />
        <li>
          <strong>Estudiantes universitarios de posgrado / Docentes y/o Investigadores:</strong> $40.000 hasta el 15 de julio y $60.000 del 15 de julio en adelante.
        </li>
        <br />
        <li>
          <strong>Público general:</strong> $50.000 hasta el 15 de julio y $70.000 del 15 de julio en adelante.
        </li>
      </ul>

      <h2>Medios de Pago</h2>
      <p><strong>Opción 1:</strong> Transferencia o depósito bancario a la siguiente cuenta:</p>
      <ul>
        <li><strong>Número de Cuenta:</strong> CC en Pesos 153-012563/9</li>
        <li><strong>CBU:</strong> 0720153620000001256390</li>
        <li><strong>Alias:</strong> MACETA.FORO.FAROL</li>
        <li><strong>Razón Social:</strong> UNIVERSIDAD NACIONAL DE LA PAM</li>
        <li><strong>CUIT/CUIL:</strong> 30586762261</li>
      </ul>

      <p><strong>Opción 2:</strong> Link de pago con tarjetas de crédito o débito</p>
      <ul>
        <li>
          <strong>Estudiantes universitarios de posgrado / Docentes y/o Investigadores:</strong><br />
          Realizá el pago a UNIVERSIDAD NACIONAL DE LA PAM por $40.000,00 con el siguiente link:<br />
          <a href="https://checkout.globalgetnet.com.ar/orders/ad8baa6f-c626-4700-8dbd-fbded464930f" target="_blank" rel="noopener noreferrer">
          Haga click aqui para ir al enlace de pago
          </a>
        </li>
        <br />
        <li>
          <strong>Público en general:</strong><br />
          Realizá el pago a UNIVERSIDAD NACIONAL DE LA PAM por $50.000,00 con el siguiente link:<br />
          <a href="https://checkout.globalgetnet.com.ar/orders/ce24774e-c769-4df9-b96d-b9baa5ce7d9c" target="_blank" rel="noopener noreferrer">
            Haga click aqui para ir al enlace de pago
          </a>
        </li>
      </ul>

      <h2>Formulario de Inscripción</h2>
      <p>
        Podés completar el formulario de inscripción desde el siguiente enlace:<br />
        <a href="https://forms.gle/E7SuBMbPJQWwnGXd9" target="_blank" rel="noopener noreferrer">
          https://forms.gle/E7SuBMbPJQWwnGXd9
        </a>
      </p>
    </div>
  );
}

export default Inscripciones;
