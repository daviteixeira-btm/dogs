import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Exercicio1 from './Exercicio1';
import Exercicio2 from './Exercicio2';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const {pathname} = window.location;

let Pagina;

if(pathname === '/produtos'){
  Pagina = Produtos
} else {
  Pagina = Home
}

ReactDOM.render(

  <React.StrictMode>
    <Header />
    <Pagina />


    <App />
    <Exercicio1 />
    <Exercicio2 />
  </React.StrictMode>,
  document.getElementById('root'),
);
