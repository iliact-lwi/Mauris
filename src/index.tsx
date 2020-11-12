import React from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';

import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';

const AppWithProvider = (
    <Provider store={ store } >
        <App />
    </Provider>
);

ReactDOM.render(AppWithProvider, document.getElementById('super-film'));