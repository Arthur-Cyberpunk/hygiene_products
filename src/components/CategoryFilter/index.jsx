import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../useContext/productsContext";
import Products from "../Products";
import "./styles.scss";

const CategoryFilter = () => {
  const { mockProducts, handleCategoryFilter, selectedCategory } =
    useContext(ProductsContext);

  const [listCategories, setListCategories] = useState([]);

  useEffect(() => {
    const countQuantityByCategory = () => {
      const count = [];

      mockProducts.data.nodes.forEach((product) => {
        if (count[product.category.name]) {
          count[product.category.name]++;
        } else {
          count[product.category.name] = 1;
        }
      });

      setListCategories(count);
    };

    countQuantityByCategory();
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
              {Object.entries(listCategories).map(
                ([category, quantity, id]) => (
                  <div
                    key={id}
                    className="boxCheckBox"
                    onClick={() => handleCheckboxChange(category)}
                  >
                    <input
                      className="checkBoxFilter"
                      type="checkbox"
                      id={category}
                      name={category}
                      checked={selectedCategory === category}
                    />
                    <label>
                      {category} ({quantity})
                    </label>
                  </div>
                ),
              )}
            </div>
          </div>
          <Products />
        </div>
      </div>
    </main>
  );
};

export default CategoryFilter;
