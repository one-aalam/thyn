import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './App.css';

const root = document.getElementById('app');
ReactDOM.render(<App framework="Reactssss" />, root);

if (module.hot) {
    module.hot.accept();
}

