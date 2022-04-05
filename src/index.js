import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css"; // 스타일 import 하는법 참고

// 모든 결과물이 담겨 있는 App 컴포넌트를  렌더링
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
