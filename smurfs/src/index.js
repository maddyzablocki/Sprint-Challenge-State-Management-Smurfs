import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { reducer } from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
rootElement
);
