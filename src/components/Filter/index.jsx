import Products from "../Products";
import "./styles.scss";

const Filter = () => {
  return (
    <main className="filterProducts">
      <div className="container">
        <div className="boxAll">
          <div className="boxTitleInput">
            <div className="boxTitleFilter">
              <span className="title">Filtros</span>
            </div>

            <div className="filterOptions">
              <input
              className="checkboxFilter"
                type="checkbox"
                // id={filtro}
                // name={filtro}
                // checked={filtros[filtro]}
                // onChange={() => handleCheckboxChange(filtro)}
              />
              <label>Roll On</label>
            </div>
          </div>

          <Products />
        </div>
      </div>
    </main>
  );
};

export default Filter;
