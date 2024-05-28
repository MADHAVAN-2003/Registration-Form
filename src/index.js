import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextData from './ContextData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextData>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextData>
);


