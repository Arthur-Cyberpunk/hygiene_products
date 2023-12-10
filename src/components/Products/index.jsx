import { useContext } from "react";
import { ProductsContext } from "../../useContext/productsContext";
import "./styles.scss";

const Products = () => {
  const { result } = useContext(ProductsContext);

  return (
    <div className="boxTitleProducts">
      <span className="title">{result.length} resultados</span>
      <div className="productGrid">
        {result?.map((product, id) => (
          <div key={id} className="product">
            <div className="infoProduct">
                <img src={product.images[0].asset.url} alt="" />
                <p className="titleProduct">{product.name}</p>
            </div>
            </div> 
        ))}
      </div>
    </div>
  );
};

export default Products;
