import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import ShopperIndex from './component/shopper-index/shopper-index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ShopperIndex />
  </React.StrictMode>
);
