import  ReactDOM  from 'react-dom';
import React from 'react';
//development and isolation => call mount immediately

//through container export mount fc

import App from './App';

const mount = (el) => {
    ReactDOM.render(
      <App />,
        el
    )
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot) {
        mount(devRoot);
    }
}

export {mount};