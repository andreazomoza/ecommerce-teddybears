import React, {Component} from 'react';
import {connect} from 'react-redux' ;
import {traerTodo} from '../../redux/actions/index'
import {link} from 'react-router-dom';
import Crud from '../Crud/Crud';
import Card from '../Card/Card';
//import './Carrito.css

export class Cart  extends Component {
     
    componentDidMount(){
    this.props.traerTodo()
    }
   
   
    render() {
      
     return (
        
        <div>
            Soy un carrito
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
