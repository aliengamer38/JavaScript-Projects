import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import StartView from "./Start/startView"

ReactDOM.render(<StartView />, document.getElementById('root'));
registerServiceWorker();
