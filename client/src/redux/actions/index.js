import { ADD_MOVIE, REMOVE_MOVIE , DATA_LOADED , MOVIE_DETAIL } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_MOVIE, payload };
}

export function removeArticle(payload) {
  return { type: REMOVE_MOVIE, payload };
}

export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:3000/pern")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
        
      });
  };
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