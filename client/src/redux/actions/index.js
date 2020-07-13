import { ADD_MOVIE, REMOVE_MOVIE , MOVIE_DETAIL, TRAER_TODO, SEARCH_PROD } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_MOVIE, payload };
}

export function removeArticle(payload) {
  return { type: REMOVE_MOVIE, payload };
}


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
export function getMovieDetail(id) {
  return function(dispatch) {
    console.log('iddd',id)
    const url = `http://www.omdbapi.com/?apikey=20dac387&i=${id}&plot=full`
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: MOVIE_DETAIL, payload: json });
      });
  }
}