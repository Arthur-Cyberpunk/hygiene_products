import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../useContext/productsContext";
import Products from "../Products";
import "./styles.scss";

const CategoryFilter = () => {
  const { mockProducts, handleCategoryFilter, selectedCategory } =
    useContext(ProductsContext);

  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    const categoriasUnicas = new Set();
    mockProducts.data.nodes.forEach((product) => {
      categoriasUnicas.add(product.category.name);
    });
    setListCategories(Array.from(categoriasUnicas));
  }, [mockProducts.data.nodes]);

  const handleCheckboxChange = (category) => {
    if (selectedCategory === category) {
      handleCategoryFilter("");
    } else {
      handleCategoryFilter(category);
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
              {listCategories.map((category, id) => (
                <div key={id} className="boxCheckBox">
                  <input
                    className="checkBoxFilter"
                    type="checkbox"
                    id={category}
                    name={category}
                    checked={selectedCategory === category}
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

export default CategoryFilter;
