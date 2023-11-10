import React, {useState} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import './App.css';
import Eventos from './components/Eventos/Eventos';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';

function App() {
  const [actividades, setActividades] = useState([]);

  const handleAgregarActividad = (nuevaActividad) => {
    setActividades([...actividades, nuevaActividad]);
  };
  
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === '/' ? undefined : <About />}
        <Routes>
          <Route path = "/eventos" element = {<Eventos onAgregarActividad={handleAgregarActividad}/>}/>
          <Route path='/' element = {<Landing />}/>
          <Route path='/home' element = {<Home actividades={actividades} />}/>   
        </Routes>
    </div>
  );
}

export default App;
