import { createContext, useState } from "react";
import mockProducts from "../productsCategory.json";

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchValueFilter, setSearchValueFilter] = useState("");
  const productsSearch = mockProducts.data.nodes;

  const handleSearchFilter = (e) => {
    setSearchValueFilter(e.target.value);
  };

  const filteredProductsTeste = productsSearch.filter((products) =>
    products.name.toLowerCase().includes(searchValueFilter.toLowerCase()),
  );

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = (mockProducts, selectedCategory, searchValueFilter) => {
    let filteredProducts = mockProducts.data.nodes;

    if (searchValueFilter) {
      filteredProducts = filteredProductsTeste;
    }

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (products) => products.category.name === selectedCategory,
      );
    }

    return filteredProducts;
  };

  const finalProducts = filteredData(
    mockProducts,
    selectedCategory,
    searchValueFilter,
  );

  return (
    <ProductsContext.Provider
      value={{
        mockProducts,
        handleCategoryFilter,
        selectedCategory,
        handleSearchFilter,
        searchValueFilter,
        finalProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
