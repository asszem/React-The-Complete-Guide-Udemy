// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CodeSamplesApp from './code samples/components/CodeSamplesApp';
import reportWebVitals from './reportWebVitals';
import React2021App from './react2021/containers/React2021App';

ReactDOM.render(
    <React2021App/ >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
