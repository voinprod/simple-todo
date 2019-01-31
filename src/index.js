import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './containers/App'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/index'
import logger from 'redux-logger'
const store = createStore(reducers, applyMiddleware(logger))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


