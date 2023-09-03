import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import NiceModal from "@ebay/nice-modal-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <NiceModal.Provider> 
        <App />
      </NiceModal.Provider>
    </React.StrictMode>
  </BrowserRouter>
);
