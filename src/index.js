import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import 'swiper/scss';

import App from './general/App';
import Context from './general/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
)