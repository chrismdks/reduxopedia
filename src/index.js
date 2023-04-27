import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/layout/Header';

/* We will have to wrap the complete app with our store (Provider component with store property)
  That way if we have multiple components, they will all have access to global store */
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <Header/>
  </Provider>
);