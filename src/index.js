import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductsContext from "./useContext/productsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsContext>
      <App />
    </ProductsContext>
  </React.StrictMode>,
);
