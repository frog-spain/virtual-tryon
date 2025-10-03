import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";

const ProductCard = ({ title, price, image, isDummy, slug }) => {
  console.log(title, image);
  return (
    <Link to={`/product-demo/products/${slug}`} className="product-card-link">
      <div className={`product-card-wrapper` + (isDummy ? " dummy" : "")}>
        <div>
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <img src="/assets/images/placeholder.webp" alt={title} />
          )}
        </div>

        <footer>
          <h2 className="product-title">{title}</h2>
          <span className="product-price">{formatPrice(price)}</span>
        </footer>
      </div>
    </Link>
  );
};

export default ProductCard;
