import React, {Component} from 'react';
import {connect} from 'react-redux' ;
import {agregarProd} from '../../redux/actions/index'


//import './Carrito.css





export class Cart  extends Component {
 
  
  
  

  

   
  render() {
      
    return (
        
      <div>soy un crud
      <form className="form-container" action="" onSubmit={this.handleSubmit}>
        <p><label>Nombre </label></p>
        <p><input type="text" id="nombre" ref={this.myRef}></input></p>
        {/*<p><label>descripcion </label></p>
        <p><input type="text" value={descripcion} onChange={e => SetDescripcion(e.target.value)}></input></p>
        <p><label>precio </label></p>
        <p><input type="text" value={precio} onChange={e => SetPrecio(e.target.value)}></input></p>
        <p><label>img </label></p>
        <p><input type="text" value={img} onChange={e => SetImg(e.target.value)}></input></p>*/}
        
        <button type='submit'>AGREGAR</button>
      </form>
      </div>        

       
             
    )
  }
}  

/*function mapStateToProps(state) {
   
    return {
      productos: state.productos,
      
    };
}*/

function mapStateToProps(state){
  return{
    newproducto: state.agregarProd
  }
}

/*function mapDispatchToProps(dispatch) {
    return {
      agregarProd:(data)=>dispatch(agregarProd(data)),
      
    };
}*/

function mapDispatchToProps(dispatch){
  return{
    agregarProd: newproducto => dispatch(newproducto(newproducto)),
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Cart)
