import { useParams, Link } from "react-router-dom";
import { productList } from "./ProductDemoPage/products-list";
import { slugify } from "../utils/slugify";

const ProductPage = () => {
  const { slug } = useParams();
  const product = productList.find((p) => slugify(p.title) === slug);

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

      <h1>{product.title}</h1>
      <p>{product.price}</p>
      {/* shared layout + product details / 3D viewer component go here */}
    </div>
  );
};

export default ProductPage;
