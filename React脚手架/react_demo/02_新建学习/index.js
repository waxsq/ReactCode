// 引入react核心库
import React from "react";
//引入reactdom
import ReactDOM from "react-dom/client";
//引入App.js,用作所有组件的载体
import App from "./App";

//开始挂载组件
//React18不支持改写法
// ReactDOM.render(<App />,document.getElementById('root'));

//创建React虚拟节点
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
