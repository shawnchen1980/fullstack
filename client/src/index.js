import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {reducer as form} from 'redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const reducer=combineReducers({form});


ReactDOM.render(
                <Provider store={createStore(reducer,{form:{auth:{values:{firstName:null}}}},applyMiddleware(thunk,logger))}>
                        <App />
                </Provider>, 
                document.getElementById('root')
            );
registerServiceWorker();
