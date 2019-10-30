import { Application } from './modules/application';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from "./store/reducers";

const store = createStore(reducer, applyMiddleware(thunk));
const root = document.querySelector('#app');
const app = <Provider store={store}><Application /></Provider>;

ReactDOM.render(app, root);
