import { Link } from "react-router-dom";

const ProductCard = ({ title, price, isDummy, slug }) => {
  return (
    <Link to={`/product-demo/products/${slug}`} className="product-card-link">
      <div class={`product-card-wrapper` + (isDummy ? " dummy" : "")}>
        <div>
          <img src="/assets/images/image.png" />
        </div>
        <div>
          <h2 className="product-title">{title}</h2>
          <span className="product-price"> {price}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
