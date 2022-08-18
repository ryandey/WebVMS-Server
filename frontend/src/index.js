import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VolunteersProvider } from './context/VolunteersContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VolunteersProvider>
      <App />
    </VolunteersProvider>
  </React.StrictMode>
);

