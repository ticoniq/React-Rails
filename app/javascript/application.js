import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Greeting from './components/Greetings.js'

import Rails from "@rails/ujs";
import * as ActiveStorage from "@rails/activestorage";
import "channels";

Rails.start();
ActiveStorage.start();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
    <App/>,
  document.getElementById('root'),
  
);