import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducers from './reducers/RootReducers';

// Storeimizi oluşturduk.
const pbStore = createStore(RootReducers, {
    contacts: [{
        name: 'Armağan Bayraktar',
        number: '03552682901'
    },{
        name: 'Özgiş Bayraktar',
        number: '05370310517'
    }]
});


ReactDOM.render(<Provider store={pbStore}><App /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
