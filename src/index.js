import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './app/layout/Header';
import Counter from './app/components/Counter';
import DestinationList from './app/components/DestinationList';

/* We will have to wrap the complete app with our store (Provider component with store property)
  That way if we have multiple components, they will all have access to global store */
import { store } from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='text-white'>
    <Provider store = {store}>
      <Header/>
      <Counter/>
      <DestinationList/>
    </Provider>
  </div>
);