import { ADD_MOVIE, REMOVE_MOVIE,  MOVIE_DETAIL, TRAER_TODO, SEARCH_PROD } from "../constants/action-types";

const initialState = {
  movies: [],
  moviesLoaded: [],
  movieDetail: {},
  productoBuscado: {},
  productos: [],
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
   
    case MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: {...action.payload}
      };
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
    default:
      return state
  }
}

export default rootReducer;