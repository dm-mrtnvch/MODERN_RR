import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers/index';
import {createStore} from 'redux';
import {Provider} from 'react-redux';



ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    , document.querySelector('#root')
);