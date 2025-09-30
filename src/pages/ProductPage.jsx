import { useParams, Link } from "react-router-dom";
import { productList } from "./ProductDemoPage/products-list";
import { slugify } from "../utils/slugify";
import { formatPrice } from "../utils/formatPrice";

import OptionButton from "../ui/OptionButton";
import { HiVideoCamera } from "react-icons/hi2";

const ProductPage = () => {
  const { slug } = useParams();
  const product = productList.find(p => slugify(p.title) === slug);

  if (!product) {
    return (
      <div className="product-page">
        <h2>Product not found</h2>
        <Link to="/product-demo">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="product-page">
      <Link to="/product-demo" className="back-button">
        ← Back to products
      </Link>
      <div className="product-wapper">
        {/* Image */}
        <div className="product-image-wrapper">
          <OptionButton
            label="Live Try On"
            icon={<HiVideoCamera />}
            isRounded
            className="try-on-button"
          />
          <div className="product-image">
            <img src="/assets/images/image.png" />
          </div>
        </div>

        {/* Details */}
        <div className="product-details">
          <h2>{product.title}</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <OptionButton label="Add to cart" />
            <span style={{ fontSize: 12, fontWeight: 200, color: "#7b7b7bff" }}>
              Delivery in 4-6 working days | Free returns and exchanges
            </span>
          </div>

          <p>{formatPrice(product.price)}</p>
          <p style={{ fontWeight: 200 }}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
