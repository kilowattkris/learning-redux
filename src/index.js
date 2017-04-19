import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import Root from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Needed to make a Root React Component as it was complaining that it needed to have one React Component, it didn't like having the Provider and Routes here
render (
  <Root />,
  document.getElementById('app')
);
