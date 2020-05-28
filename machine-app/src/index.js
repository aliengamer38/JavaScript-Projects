import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider,  } from "react-redux"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { BrowserRouter } from "react-router-dom"
import * as reducers from "./store/reducer/reducers"

const reducer = combineReducers({
    user: reducers.userReducer,  
    game: reducers.gameReducer,
    auth: reducers.authReducer,
    login: reducers.loginReducer,
    counter: reducers.counterReducer,
    work: reducers.workReducer
});

const composeEnhancer =  process.env.NODE_ENV === "development" ? ((typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose) : null;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

// Interceptors

// axios.interceptors.response.use(response => {
//     console.log(response);
//     return response;
// }, error => {
//     console.log(error);
//     return Promise.reject(error);
// })

const app = (   
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
