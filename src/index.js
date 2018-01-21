import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './App.scss';

const root = document.getElementById('app');
ReactDOM.render(<App framework="React" />, root);

if (module.hot) {
    module.hot.accept();
}

