import React from 'react';
import ReactDom from 'react-dom';
import store from '@/redux/store';
import App from '@/components/app';
import './index.scss';
import { Provider } from 'react-redux';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.body,
);
