import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import ShopperIndex from './component/shopper-index/shopper-index';

// import react cookie
import {CookiesProvider} from 'react-cookie'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* Must use cookiesProvider  */}
    <CookiesProvider>
    <ShopperIndex />

    </CookiesProvider>
  </React.StrictMode>
);
