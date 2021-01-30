import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//connecting redux and react through Provider
import { Provider } from 'react-redux'

//creating redux store
import { createStore } from 'redux'
import reducer from './redux/reducers/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


