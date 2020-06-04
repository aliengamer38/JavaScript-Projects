import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import { Provider } from "react-redux"
import gameReducer from "./utils/store/reducers/game"
import createSagaMiddleware from "redux-saga"
import { watchGame } from "./utils/sagas/index"
import thunk from "redux-thunk"
import gameSaga from "./utils/sagas/game"

const composeEnhancer = process.env.NODE_ENV === "development" ? ((typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose) : null;

const reducer = combineReducers({
    game: gameReducer
})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, composeEnhancer(applyMiddleware(sagaMiddleware, thunk)))


sagaMiddleware.run(watchGame);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
