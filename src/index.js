import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import WebFont from 'webfontloader';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers/store'

let store = createStore(Reducer)

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'Garamond']
  }
});

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();