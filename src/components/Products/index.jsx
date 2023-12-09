import { useContext } from "react";
import { ProductsContext } from "../../useContext/productsContext";
import "./styles.scss";

const Products = () => {
  const { productsSearch } = useContext(ProductsContext);

  return (
    <div className="boxTitleProducts">
      <span className="title">resultados</span>
      <div className="productGrid">
        {productsSearch?.map((product, id) =>
          productsSearch.length !== 0 ? 
          <div className="product">
            <div className="infoProduct">
                <img src={product.images[0].asset.url} alt="" />
                <p className="titleProduct">{product.name}</p>
            </div>
            </div> 
          : <></>,
        )}
      </div>
    </div>
  );
};

export default Products;
