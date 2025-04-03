import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './componentes/Principal';
import Navbar from './componentes/Navbar';
import Organizadores from './componentes/Organizadores';
import Cronograma from './componentes/Cronograma.js';
import Inscripciones from './componentes/Inscripciones.js';
import AreasTematicas from './componentes/AreasTematicas.js';
import PresentacionTrabajos from './componentes/PresentacionTrabajos.js';


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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;