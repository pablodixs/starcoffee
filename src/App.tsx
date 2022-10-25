import { BrowserRouter } from "react-router-dom";

import { ProductsContextProvider } from "./context/ProductsContext";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Router />
      </ProductsContextProvider>
    </BrowserRouter>
  );
}
