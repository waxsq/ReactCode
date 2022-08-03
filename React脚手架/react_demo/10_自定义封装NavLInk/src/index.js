import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 全局使用一个路由，方便管理 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
