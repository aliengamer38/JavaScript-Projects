import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import * as reducers from "./store/reducer/reducers"
import Customer from "./Customer/Customer"

const reducer = combineReducers({
    user: reducers.userRedc,    
})

console.log("before provider")

const newReducer = combineReducers({
    customer: reducers.customerRedc,    
})

const store = createStore(reducers.supplyRedc);
console.log("after store");
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
