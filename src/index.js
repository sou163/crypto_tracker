import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import store from './app/store';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback="Error in index.js">
      <Router>
        <Provider store={store}>
          <App />
        </Provider>      
      </Router>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
