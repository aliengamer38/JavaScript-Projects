import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AuthProvider from "./components/context/auth-context"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import debitReducer from "./reducer/store/debit"
import LogProvider from "./context/log-context"

const reducer = combineReducers({
    debit: debitReducer
})
const store = createStore(reducer)

const display = () => {
    alert("alert")
}

const app = (
    <LogProvider display={display}>
        <Provider store={store}>
            <AuthProvider status="I dont know">
                <App/>
            </AuthProvider>
        </Provider>
    </LogProvider>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
