import React, { createContext, useState } from 'react';

// Crear el contexto
export const AutenticationContext = createContext();

// Proveedor del contexto
export const AutenticationProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación, inicialmente false

  // Función para alternar entre dentro/fuera del juego
  const toggleAuthentication = () => {
    setIsAuthenticated((prevAuth) => (prevAuth ? false : true));
  };  

  return (
    <AutenticationContext.Provider value={{ isAuthenticated, toggleAuthentication }}>
      {children}
    </AutenticationContext.Provider>
  );
};
