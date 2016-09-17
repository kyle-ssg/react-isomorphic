/**
 * Created by kylejohnson on 16/09/2016.
 */
import './styles/screen.scss';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import React from 'react';
const rootElement = document.getElementById('react');
// Render the React application to the DOM
render(<Router history={browserHistory} routes={routes}/>,rootElement);//