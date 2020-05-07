import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Main from "./Main/Main"
import Start from "./Start/Start"

ReactDOM.render(<Start />, document.getElementById('root'));
registerServiceWorker();
