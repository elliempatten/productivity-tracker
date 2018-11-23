import React, { Component } from 'react';
import styles from './app.module.css';
import Page from './components/page/page-component';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  render() {
    return (<Provider store = { store }><Page /></Provider>
    );
  }
}


 
export default App;
