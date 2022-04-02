import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// @types/react-dom 업데이트 이후 변경
// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = (ReactDOM as any).createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
