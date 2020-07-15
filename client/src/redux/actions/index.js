import { TRAER_TODO, SEARCH_PROD, AGREGAR_PROD } from "../constants/action-types";




export function traerTodo() {
  return function(dispatch) {
    return fetch("http://localhost:3000/products/traertodo")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: TRAER_TODO, payload: json });
        
      });
  };
}

export function searchProd(id) {
  return function(dispatch) {
    const url = `http://localhost:3000/products/search${id}`
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: SEARCH_PROD, payload: json });
      });
  }
}



export function agregarProd (datos){
  return function(dispatch){
      return fetch.post('http://localhost:3000/products/agregarprod',{
              nombre: datos.nombre,
              descripcion: datos.descripcion,
              precio: datos.precio,
              img: datos.img
      })
      .then(response =>response.data) 
      .then(data => {
          dispatch({ type: AGREGAR_PROD , payload: data})
      })
  }
}