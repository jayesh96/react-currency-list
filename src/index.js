import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';


const store = createStore(rootReducer);
store.subscribe(() => console.log("get state----",store.getState())); 

ReactDOM.render(
    <Provider store ={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();