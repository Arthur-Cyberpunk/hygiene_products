import { useContext, useState } from "react";
import searchMagnifier from "../../assets/search.svg";
import { ProductsContext } from "../../useContext/productsContext";
import "./styles.scss";

const Search = () => {
  const {
    produtosMock,
    setProductsSearch,
    productsSearch,
    categoriaSelecionada,
  } = useContext(ProductsContext);

  const [search, setSearch] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(e.target.value);

    if (categoriaSelecionada !== '') {
      const filteredProductsTeste = productsSearch.filter((produto) =>
        produto.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setProductsSearch(filteredProductsTeste);
    } else {
      const filteredProducts = produtosMock.data.nodes.filter((produto) =>
        produto.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setProductsSearch(filteredProducts);
    }
  };

  return (
    <main className="boxSearch">
      <div className="container">
        <div className="searchHere">
          <input
            type="text"
            placeholder={isInputFocused ? "" : "BUSQUE AQUI"}
            value={search}
            onChange={handleSearch}
            className="searchProduct"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          <img className="iconSearch" src={searchMagnifier} alt="search" />
        </div>
      </div>
    </main>
  );
};

export default Search;
