import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Calculadora from './calculadora'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
                <Route path='/' element = {<App/>} />
                <Route path='/calculadora' element = {<Calculadora/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

