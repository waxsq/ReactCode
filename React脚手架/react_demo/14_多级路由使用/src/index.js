import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter ,HashRouter } from "react-router-dom";


import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 全局使用一个路由，方便管理 */}
    <BrowserRouter>

    {/* 如果采用HashRouter的话，可以解决二级路由丢失样式问题，因为url会带有 '#' 后面接的是Route显示的地址 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
