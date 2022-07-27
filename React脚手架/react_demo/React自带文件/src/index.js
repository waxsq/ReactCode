import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 引入app.js
import App from './App';
import reportWebVitals from './reportWebVitals';


// 相当于ReactDOM.render(<App/>,document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode/>该标签表示检查组件App及里面的所有组件的合理性
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//用于记录页面性能
reportWebVitals();

// 这个文件是入口文件
