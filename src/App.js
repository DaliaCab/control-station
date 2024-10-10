import React from 'react';
import { AutenticationProvider } from './components/AutenticationContext.js'; // Importa el proveedor
import ControlStation from './components/ControlStation'; // El componente que manejará el estado
import './App.css';

function App() {                   //Abuelo
  return (
    <AutenticationProvider>      {/*Padre */}
      <div className='app-background'>
        <ControlStation />       {/*Hijo */}
      </div>
    </AutenticationProvider>
  );
}

export default App;
