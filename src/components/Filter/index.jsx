import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../useContext/productsContext";
import Products from "../Products";
import "./styles.scss";

const Filter = () => {
  const { produtosMock } = useContext(ProductsContext);

  const [listaDeCategorias, setListaDeCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  useEffect(() => {
    const categoriasUnicas = new Set();
    produtosMock.data.nodes.forEach(product => {
      categoriasUnicas.add(product.category.name);
    });
    setListaDeCategorias(Array.from(categoriasUnicas));
  }, [produtosMock.data.nodes]);

  //console.log(listaDeCategorias)

  const filtrarProdutos = categoria => {

    console.log(categoria)
    setCategoriaSelecionada(categoria);
  };

  const produtosFiltrados = produtosMock.data.nodes.filter(
    produto => produto.category === categoriaSelecionada
  );

  console.log(produtosFiltrados)

  return (
    <main className="filterProducts">
      <div className="container">
        <div className="boxAll">
          <div className="boxTitleInput">
            <div className="boxTitleFilter">
              <span className="title">Filtros</span>
            </div>

            <div className="filterOptions">
              {listaDeCategorias.map((category) => (
                <div className="boxCheckBox" onClick={() => filtrarProdutos(category)}>
                  <input
                    className="checkBoxFilter"
                    type="checkbox"
                    // id={filtro}
                    // name={filtro}
                    // checked={filtros[filtro]}
                    // onChange={() => handleCheckboxChange(filtro)}
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
