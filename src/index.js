/* eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import Root from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore(); //could pass initialState param, however reducers pass a default
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
//Needed to make a Root React Component as it was complaining that it needed to have one React Component, it didn't like having the Provider and Routes here
render (
  <Root store={store}/>,
  document.getElementById('app')
);
