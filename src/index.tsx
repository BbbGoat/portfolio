import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Providers from './redux/provider';
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import ToastProvider from './components/ToastProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Providers> */}
      <BrowserRouter>
        <ToastProvider />
        <Header />
        <App />
        <Footer />
      </BrowserRouter>
    {/* </Providers> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
