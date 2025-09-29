import { Link } from "react-router-dom";

const ProductCard = ({ title, price, isDummy, slug }) => {
  return (
    <Link to={`/product-demo/products/${slug}`} className="product-card-link">
      <div class={`product-card-wrapper` + (isDummy ? " dummy" : "")}>
        {title}
        {price}
      </div>
    </Link>
  );
};

export default ProductCard;
