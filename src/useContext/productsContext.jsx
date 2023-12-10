import { createContext, useState } from "react";
import produtosMock from "../products (1).json";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [productsSearch, setProductsSearch] = useState(produtosMock.data.nodes);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProductsTeste = productsSearch.filter((produto) =>
    produto.name.toLowerCase().includes(search.toLowerCase()),
  );
  
  const filtrarProdutos = categoria => {
    setCategoriaSelecionada(categoria);
  };

  function filteredData(produtosMock, categoriaSelecionada, search) {
    let filteredProducts = produtosMock.data.nodes;

    if (search) {
      filteredProducts = filteredProductsTeste;
    }

    if (categoriaSelecionada) {

        filteredProducts = filteredProducts.filter(
          produto => produto.category.name === categoriaSelecionada
      );
    }

    
    return filteredProducts;
  }

  const result = filteredData(produtosMock, categoriaSelecionada, search);

  console.log(result)

  return (
    <ProductsContext.Provider
      value={{ produtosMock, productsSearch, setProductsSearch, filtrarProdutos, categoriaSelecionada, handleSearch, search, result }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
