import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "typeface-lato";
import "typeface-lobster";
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));