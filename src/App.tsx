import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./context/productsContext";
import { Router } from "./Router";

export function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Router />
      </ProductsContextProvider>
    </BrowserRouter>
  )
}
