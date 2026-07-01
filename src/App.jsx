/* FILE: src/App.jsx */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LoaderProvider } from './context/LoaderContext';
import Loader from './components/common/Loader';
import AppRoutes from './routes/AppRoutes';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import './index.css';

export const App = () => {
  // Call initial scroll animations on app boot
  useScrollAnimation();

  return (
    <LoaderProvider>
      <BrowserRouter>
        <Loader />
        <AppRoutes />
      </BrowserRouter>
    </LoaderProvider>
  );
};

export default App;
