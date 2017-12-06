import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from '../src/store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <Provider store={ store } >
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
    </Provider>
    , document.getElementById('root'));
unregister();
