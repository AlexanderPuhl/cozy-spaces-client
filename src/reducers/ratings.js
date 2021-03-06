import {
  FETCH_RATINGS_SUCCESS,
  FETCH_RATINGS_ERROR,
  FETCH_RATINGS_REQUEST,
  FETCH_RATING_BY_PLACEID_REQUEST,
  FETCH_RATING_BY_PLACEID_ERROR,
  FETCH_RATING_BY_PLACEID_SUCCESS,
  POST_RATING_REQUEST,
  POST_RATING_ERROR,
  POST_RATING_SUCCESS,
  TOGGLE_EDIT_RATING,
  EDIT_RATING_REQUEST,
  EDIT_RATING_ERROR,
  EDIT_RATING_SUCCESS,
} from '../actions/ratings';
 
 const initialState = {
   ratings: [],
   loading: false,
   error: null,
   specificRating : null,
   editing: false
 };
 
 export default function reducer(state = initialState, action) {
   switch (action.type) {
     case FETCH_RATINGS_SUCCESS:
       return {...state, ratings: action.ratings, loading: false, error: null};
     case FETCH_RATINGS_ERROR:
       return {...state, loading: false, error: action.error};
     case FETCH_RATINGS_REQUEST:
       return {...state, loading: true};
     case FETCH_RATING_BY_PLACEID_REQUEST: 
       return {...state, loading: true};
     case FETCH_RATING_BY_PLACEID_ERROR: 
       return {...state, loading: false, error: action.error, specificRating: null};
     case FETCH_RATING_BY_PLACEID_SUCCESS: 
       return {...state, loading: false, specificRating: action.rating, error: null}
     case POST_RATING_REQUEST : 
       return {...state, loading: true};
     case POST_RATING_SUCCESS: 
       return {...state, loading: false};
     case POST_RATING_ERROR: 
       return {...state, loading: false, error: action.error};
     case TOGGLE_EDIT_RATING: 
       return {...state, editing: !(state.editing)};
     case EDIT_RATING_REQUEST: 
       return {...state, loading: true};
     case EDIT_RATING_SUCCESS: 
       return {...state, loading: false};
     case EDIT_RATING_ERROR: 
       return {...state, loading: false, error: action.error}
     default: 
       return state;
   }
 }
