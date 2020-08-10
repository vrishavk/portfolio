import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {ProductProvider} from './components/content/Content'

ReactDOM.render(
  <Router>
    <ProductProvider>
    <App />
    </ProductProvider>
  </Router>,
  document.getElementById('root')
);


