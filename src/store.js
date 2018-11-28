//import goalTracking from './reducers/reducers';
import { createStore } from 'redux';
import allReducers from './reducers/goal-tracking';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
