import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/App.css";// <- importante, Tailwind só funciona se importar o CSS

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
