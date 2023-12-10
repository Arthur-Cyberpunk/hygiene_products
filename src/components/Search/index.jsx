import { useContext, useState } from "react";
import searchMagnifier from "../../assets/search.svg";
import { ProductsContext } from "../../useContext/productsContext";
import "./styles.scss";

const Search = () => {
  const { handleSearch, search } = useContext(ProductsContext);

  const [isInputFocused, setIsInputFocused] = useState(false);

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
