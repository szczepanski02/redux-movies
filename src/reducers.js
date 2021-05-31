import { combineReducers } from 'redux';
import actorsReducer from './app/actors/duck/reducers';
import moviesReducer from './app/movies/duck/index';

const rootReducer = combineReducers({
    actors: actorsReducer,
    movies: moviesReducer
});

export default rootReducer;
