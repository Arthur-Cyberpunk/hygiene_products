import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../useContext/productsContext";
import Products from "../Products";
import "./styles.scss";

const Filter = () => {
  const { produtosMock, filtrarProdutos, categoriaSelecionada } = useContext(ProductsContext);

  const [listaDeCategorias, setListaDeCategorias] = useState([]);

  useEffect(() => {
    const categoriasUnicas = new Set();
    produtosMock.data.nodes.forEach(product => {
      categoriasUnicas.add(product.category.name);
    });
    setListaDeCategorias(Array.from(categoriasUnicas));
  }, [produtosMock.data.nodes]);

  const handleCheckboxChange = (category) => {
    if (categoriaSelecionada === category) {
      filtrarProdutos('');
    } else {
      filtrarProdutos(category);
    }
  };

  return (
    <main className="filterProducts">
      <div className="container">
        <div className="boxAll">
          <div className="boxTitleInput">
            <div className="boxTitleFilter">
              <span className="title">Filtros</span>
            </div>

            <div className="filterOptions">
              {listaDeCategorias.map((category, id) => (
                <div key={id} className="boxCheckBox" >
                  <input
                    className="checkBoxFilter"
                    type="checkbox"
                    id={category}
                    name={category}
                    checked={categoriaSelecionada === category}
                    onClick={() => handleCheckboxChange(category)}
                  />
                  <label>{category}</label>
                </div>
              ))}

            </div>
          </div>

          <Products />
        </div>
      </div>
    </main>
  );
};

export default Filter;
