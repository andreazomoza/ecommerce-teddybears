import {TRAER_TODO, SEARCH_PROD, AGREGAR_PROD } from "../constants/action-types";

const initialState = {
  
  productoBuscado: {},
  productos: [],
  newproducto:{},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TRAER_TODO:
      return{
        ...state,
        productos: action.payload
      };
    case SEARCH_PROD:
      return {
        ...state,
        movieDetail: {...action.payload}
      };
    case AGREGAR_PROD:
      return {
        ...state,
        productos : action.datos
      };
    default:
      return state
  }
}

export default rootReducer;