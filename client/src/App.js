import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import NavBar from '../src/componentes/Navbar/Navbar';
import Cart from '../src/componentes/Cart/Cart'
import Home from '../src/componentes/home/Home';
import Productos from '../src/componentes/Producto/Producto';
import Crud from '../src/componentes/Crud/Crud';
import './App.css';
import Buscador from '../src/componentes/Buscador/Buscador';

import Login from './componentes/login/Login';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path='/' component ={Buscador}/>
      <Route path='/Productos' component={Productos}/>
      <Route path='/crud' component={Crud}/>
      <Route path='/cart' component={Cart}/>
      <Route path= '/login' component={Login} />
    </React.Fragment>
  );
}

export default App;

