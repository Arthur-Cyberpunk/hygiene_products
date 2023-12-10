import { useContext } from "react";
import { ProductsContext } from "../../useContext/productsContext";
import "./styles.scss";

const Products = () => {
  const { finalProducts } = useContext(ProductsContext);

  return (
    <div className="boxTitleProducts">
      <span className="title">{finalProducts.length} resultados</span>
      <div className="productGrid">
        {finalProducts?.map((product, id) => (
          <div key={id} className="product">
            <div className="infoProduct">
              <img
                src={product.images[0].asset.url}
                alt={product.images[0].alt}
              />
              <p className="titleProduct">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
