import React, {Component} from 'react';
import {connect} from 'react-redux' ;
import {traerTodo} from '../../redux/actions/index'
import {link} from 'react-router-dom';
import './Producto.css'
import Card from '../Card/Card';


export class Cart  extends Component {
     
  componentDidMount(){
    this.props.traerTodo()
  }
   
   
  render() {
      
    return (  
      <div className="prod-Cards">
        {this.props.productos.map((el,i)=>  
          <Card 
            key={i}
            nombre ={el.nombre}
            descripcion ={el.descripcion}
            precio = {el.precio}
            img = {el.img}
          />
        )}
      </div>      
     )
    }
  }  

function mapStateToProps(state) {
  return {
    productos: state.productos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    traerTodo:(data)=>dispatch(traerTodo(data)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart)
