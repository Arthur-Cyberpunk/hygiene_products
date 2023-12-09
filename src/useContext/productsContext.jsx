import { createContext, useState } from "react";
import produtosMock from "../products (1).json";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [productsSearch, setProductsSearch] = useState(produtosMock.data.nodes)

  console.log(produtosMock.data.nodes);

  return (
    <ProductsContext.Provider
      value={{produtosMock, productsSearch, setProductsSearch}}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
