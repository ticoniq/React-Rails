// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './app';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
