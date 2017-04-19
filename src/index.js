import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import Root from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


render (
  <Root />
  ,
  document.getElementById('app')
);
