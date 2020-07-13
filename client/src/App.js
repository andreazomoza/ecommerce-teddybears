import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import NavBar from '../src/componentes/Navbar/Navbar';
import Cart from '../src/componentes/Cart/Cart'
import Home from '../src/componentes/home/Home';
import Productos from '../src/componentes/Producto/Producto';
import Crud from '../src/componentes/Crud/Crud';
import './App.css';
import Buscador from '../src/componentes/Buscador/Buscador.jsx';
import Login from './componentes/login/Login';
import store from './redux/store/index';
import {Provider} from 'react-redux';


function App() {
  return (
    <React.Fragment>
      <NavBar className='n'/>
      <Route exact path='/' component ={Home}/>
      <Route path='/Productos' component={Productos}/>
      <Route path='/crud' component={Crud}/>
      <Route path='/cart' component={Cart}/>
      <Route path= '/login' component={Login} />
    </React.Fragment>
  );
}

export default App;

