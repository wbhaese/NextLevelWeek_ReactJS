import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase';
import './styles/global.scss';

//para utilizar o sass é necessário intalar:
//yarn add node-sass@^5.0.0

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
