import { createBrowserHistory } from 'history';
import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import App from './app';
import { currentUser } from './app/actions/login';
import configureStore from './app/configureStore';

const history = createBrowserHistory();
const store = configureStore(history);

// Immediate actions
// store.dispatch(onLoadAction());
store.dispatch(currentUser());

render(
    <Provider store={store as any}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
