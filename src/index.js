import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import ShopperIndex from './component/shopper-index/shopper-index';

// import react cookie
import {CookiesProvider} from 'react-cookie'
import UseContext from './component/use-context/use-context';
import UseReducerDemo from './component/use-reducer/use-reducer-demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* Must use cookiesProvider  */}
    <CookiesProvider>
    <UseReducerDemo/>
    </CookiesProvider>
  </React.StrictMode>
);
