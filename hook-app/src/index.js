import React from 'react';
import ReactDOM from 'react-dom/client';
//import { HooksApp } from './HooksApp';
import { CounterApp } from './01-useState/CounterApp';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>
);