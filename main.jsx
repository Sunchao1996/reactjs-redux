import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import App from './public/javascripts/components/app';
import {Provider}from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import todoApp from './public/javascripts/reducers';
import thunk from 'redux-thunk';

import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
//对action进行处理，使action可以进行异步操作
let store = createStore(combineReducers({todoApp, routing: routerReducer}), applyMiddleware(thunk));
console.log(store);
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/">
                <IndexRoute component={App}/>
            </Route>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);

