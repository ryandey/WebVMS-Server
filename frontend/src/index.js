import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VolunteersProvider } from './context/VolunteersContext';
import { AuthProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <VolunteersProvider>
        <App />
      </VolunteersProvider>
    </AuthProvider>
  </React.StrictMode>
);

