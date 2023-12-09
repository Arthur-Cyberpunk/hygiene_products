import { createContext, useEffect, useState } from "react";
import produtosMock from "../products (1).json";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [productsSearch, setProductsSearch] = useState(produtosMock.data.nodes);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  useEffect(() => {
    if (categoriaSelecionada !== '') {
      const produtosFiltrados = produtosMock.data.nodes.filter(
        produto => produto.category.name === categoriaSelecionada
      );
      setProductsSearch(produtosFiltrados);
    } else {
      setProductsSearch(produtosMock.data.nodes)
    }
  }, [categoriaSelecionada]);

  const filtrarProdutos = categoria => {
    setCategoriaSelecionada(categoria);
  };


  return (
    <ProductsContext.Provider
      value={{ produtosMock, productsSearch, setProductsSearch, filtrarProdutos, categoriaSelecionada }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
