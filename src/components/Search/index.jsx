import { useState } from 'react';
import search from "../../assets/search.svg";
import "./styles.scss";

const Search = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <main className="boxSearch">
      <div className="container">
        <div className="searchHere">
          <input
            type="text"
            placeholder={isInputFocused ? '' : 'BUSQUE AQUI'}
            //value={searchTerm}
            //onChange={(e) => setSearchTerm(e.target.value)}
            className="searchProduct"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
          <img className="iconSearch" src={search} alt="search" />
        </div>
      </div>
    </main>
  );
};

export default Search;
