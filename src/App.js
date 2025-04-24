import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import AnimatedPage from './componentes/AnimatedPage.js';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<AnimatedPage><Principal /></AnimatedPage>} />
        <Route path='/organizadores' element={<AnimatedPage><Organizadores /></AnimatedPage>} />
        <Route path='/cronograma' element={<AnimatedPage><Cronograma /></AnimatedPage>} />
        <Route path='/inscripciones' element={<AnimatedPage><Inscripciones /></AnimatedPage>} />
        <Route path='/areas-tematicas' element={<AnimatedPage><AreasTematicas /></AnimatedPage>} />
        <Route path='/presentacion-trabajos' element={<AnimatedPage><PresentacionTrabajos /></AnimatedPage>} />
        <Route path='/InformacionGeneral' element={<AnimatedPage><InformacionGeneral /></AnimatedPage>} />
        <Route path='/Sponsors' element={<AnimatedPage><Auspiciantes /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
