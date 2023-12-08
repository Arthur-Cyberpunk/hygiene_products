import "./styles.scss";

const Filter = () => {
  return (
    <main className="boxFilter">
      <div className="container">
        <span className="title">Filtros</span>
        <div className="opcao-filtro">
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
    </main>
  );
};

export default Filter;
