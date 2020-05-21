import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import specsReducer from "./Utility/store/reducer/specsRedc"
import compReducer from "./Utility/store/reducer/compRedc"
import carReducer from "./Utility/store/reducer/carRedc"
import doorReducer from "./Utility/store/reducer/doorRedc"
import gameReducer from "./Utility/store/reducer/gameRedc"
import planeReducer from "./Utility/store/reducer/planeRedc"
import thunk from "redux-thunk"

const reducer = combineReducers({
    comps: compReducer,
    specs: specsReducer,
    doors: doorReducer,
    cars: carReducer,
    games: gameReducer,
})

const logger = store => {
    return next => {
        return action => {
            console.log("[Middleware] Dispatching", action);
            console.log(store.getState());
            const result = next(action);
            console.log("[Middleware] next state", store.getState())
            return result;
        }
    }
}
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(planeReducer, composeEnhacers(applyMiddleware(logger, thunk)));
const rootApp = (
    <Provider store={store}>    
        <App/>
    </Provider>
)
ReactDOM.render(rootApp, document.getElementById('root'));
registerServiceWorker();
