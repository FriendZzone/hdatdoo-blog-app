import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, compose } from 'redux';
import mySaga from './redux/saga';
import reducers from './redux/reducers';
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware), ReactReduxDevTools))
sagaMiddleware.run(mySaga)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
