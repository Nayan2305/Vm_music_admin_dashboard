import React from 'react';
import ReactDOM from 'react-dom/client';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./pages";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />       
      </Routes>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
