import React, { useContext, useState, useEffect } from 'react';
import { AutenticationContext } from './AutenticationContext';
import '../App.css'

function ControlStation() {
  const { isAuthenticated, toggleAuthentication } = useContext(AutenticationContext);

  //Agrego un estado para controlar la animación
  const [animate, setAnimate] =useState(false);
    // Efecto para reiniciar la animación cuando cambia el estado de autenticación
    useEffect(() => {
      setAnimate(true); // Activar la animación
      const timer = setTimeout(() => {
        setAnimate(false); // Reiniciar la clase de animación después de un corto período
      }, 3500); // Pequeño retraso para reiniciar la animación
  
      return () => clearTimeout(timer); // Limpiar el timer al desmontar el componente
    }, [isAuthenticated]);


  return (
    <div className="game-container">
      <h1 className="game-title">Estación de Control</h1>
      <p className={`game-status ${animate ? 'typing' : ''}`}>
        {isAuthenticated ? 'Has entrado al juego' : 'Has salido del juego'}
      </p>
      <button className="game-button" onClick={toggleAuthentication}>
        {isAuthenticated ? 'Salir del juego' : 'Entrar al juego'}
      </button>
    </div>
  );
}

export default ControlStation;


