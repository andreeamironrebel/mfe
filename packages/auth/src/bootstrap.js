import  ReactDOM  from 'react-dom';
import React from 'react';
import {createMemoryHistory, createBrowserHistory} from "history";
//development and isolation => call mount immediately

//through container export mount fc

import App from './App';

const mount = (el, {onSignIn, onNavigate, defaultHistory, initialPath}) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });


    if(onNavigate){
        history.listen(onNavigate);
    }

    ReactDOM.render(
      <App onSignIn={onSignIn} history={history}/>,
        el
    )

    return {
        onParentNavigate({pathname: nextPathname}){
            const {pathname} = history.location;

            if(pathname !== nextPathname)
            history.push(nextPathname)
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root')

    if(devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory()});
    }
}

export {mount};