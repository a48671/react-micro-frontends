import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

function mount(el) {

    ReactDOM.render(
        <App />,
        el
    );
}

if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('_marketing-root');
    if (root) {
        mount(root);
    }
}

export { mount };
