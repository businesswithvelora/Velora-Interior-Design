/* FILE: src/context/LoaderContext.jsx */
import React, { createContext, useState, useEffect } from 'react';

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
