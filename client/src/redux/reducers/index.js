import { ADD_MOVIE, REMOVE_MOVIE, DATA_LOADED , MOVIE_DETAIL } from "../constants/action-types";

const initialState = {
  movies: [],
  moviesLoaded: [],
  movieDetail: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      }
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => item.title !== action.payload.title)
      }
    case DATA_LOADED:
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      };
    case MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: {...action.payload}
      };
    default:
      return state
  }
}

export default rootReducer;