import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./index.module.scss";

const ProductCard = ({ title, price, image, isDummy, slug }) => {
  <Link
    to={`/product-demo/products/${slug}`}
    className={`${styles.productCardLink} ${isDummy ? styles.dummyLink : ""}`}
  >
    <div
      className={`${styles.productCardWrapper} ${isDummy ? styles.dummy : ""}`}
    >
      <div>
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <img src="/assets/images/placeholder.webp" alt={title} />
        )}
      </div>

      <footer>
        <h2>{title}</h2>
        <span>{formatPrice(price)}</span>
      </footer>
    </div>
  </Link>;
};

export default ProductCard;
