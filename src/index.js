import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "font-awesome/css/font-awesome.min.css"
import { HashRouter, Route } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HashRouter>
    <Route component={App} />
</HashRouter>, document.getElementById('root'));
registerServiceWorker();
