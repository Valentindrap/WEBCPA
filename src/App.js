import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './componentes/Principal.js';
import Navbar from './componentes/Navbar.js';
import Organizadores from './componentes/Organizadores.js';
import Cronograma from './componentes/Cronograma.js';
import Inscripciones from './componentes/Inscripciones.js';
import AreasTematicas from './componentes/AreasTematicas.js';
import PresentacionTrabajos from './componentes/PresentacionTrabajos.js';
import InformacionGeneral from './componentes/InformacionGeneral.js';
import Footer from './componentes/Footer.js';
import Auspiciantes from './componentes/Auspiciantes.js';


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Principal/>} />
          <Route path='/organizadores' element={<Organizadores/>} />
          <Route path='/cronograma' element={<Cronograma/>} />
          <Route path='/inscripciones' element={<Inscripciones/>} />
          <Route path='/areas-tematicas' element={<AreasTematicas/>} />
          <Route path='/presentacion-trabajos' element={<PresentacionTrabajos/>} />
          <Route path='/InformacionGeneral' element={<InformacionGeneral/>} />
          <Route path='/Sponsors' element={<Auspiciantes/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;