import React from 'react';
import ReactDOM from 'react-dom/client';
import {UglyContextProvider} from './UglyContext'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UglyContextProvider>
    <App />
  </UglyContextProvider>
);