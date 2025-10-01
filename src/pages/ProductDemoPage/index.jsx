import BackButton from "../../ui/BackButton";
import { productList } from "./products-list";
import ProductCard from "./ProductCard";

import { slugify } from "../../utils/slugify";

const ProductDemoPage = () => {
  return (
    <div className="demo-container">
      <BackButton />

      <div className="product-cards-page">
        <h1 style={{ marginBottom: 40 }}>3D Marketplace Demo</h1>

        <div className="product-cards-grid">
          {productList.map(product => {
            const slug = slugify(product.title);
            return (
              <ProductCard
                title={product.title}
                price={product.price}
                isDummy={product.isDummy}
                slug={slug}
                key={product.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDemoPage;
