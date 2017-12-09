import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import App from './public/javascripts/components/app';
import {Provider}from 'react-redux';
import {createStore, combineReducers} from 'redux';
import todoApp from './public/javascripts/reducers';

import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

let store = createStore(combineReducers({todoApp, routing: routerReducer}));
console.log(store)
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

