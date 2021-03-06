import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/App';
// import ClassBasedComponentLifecycle from './code samples/ClassBasedComponentLifecycle';
import CodeSamples from './code samples/containers/CodeSamples';
// import Assignment1App from './assignments/Assignment1 - Base Syntax/AppAssignment1.js';
// import Assignment2App from './assignments/Assignment2 - Lists/AppAssignment2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CodeSamples />
    {/* <App appTitle='React Guide' /> */}
    {/* <ClassBasedComponentLifecycle/> */}
    {/* <Assignment2App /> */}
    {/* <Assignment1App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
