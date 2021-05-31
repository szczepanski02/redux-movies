import { createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { movieActions } from './app/movies/duck';

const store = createStore(rootReducer, composeWithDevTools());
// store.dispatch(movieActions.add('Rambo V'));

export default store;