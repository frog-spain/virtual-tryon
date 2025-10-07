// UI
import BackButton from "../../ui/BackButton";
import ProductCard from "./ProductCard";
// Dependencies
import { slugify } from "../../utils/slugify";
import styles from "./index.module.scss";
import { tryOn3dProducts, tryOnAIProducts, ARProducts } from "./product-list";

const ProductList = () => {
  return (
    <div className="demo-container">
      <BackButton />

      <div className="product-cards-page">
        <h1 style={{ marginBottom: 40 }}>Marketplace Demo</h1>
        <div className={styles.productListWrapper}>
          {/* 3D Try-on */}
          <div>
            <h2>3D Try-on</h2>
            <div className={styles.productCardsGrid}>
              {tryOn3dProducts.map((product, index) => {
                const slug = slugify(product.title);
                return (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.thumbnail}
                    isDummy={product.isDummy}
                    slug={slug}
                    key={product.title + index}
                  />
                );
              })}
            </div>
          </div>

          {/* AI Outfit Try-on */}
          <div>
            <h2>AI Outfit Try-on</h2>
            <div className={styles.productCardsGrid}>
              {tryOnAIProducts.map((product, index) => {
                const slug = slugify(product.title);
                return (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.thumbnail}
                    isDummy={product.isDummy}
                    slug={slug}
                    key={product.title + index}
                  />
                );
              })}
            </div>
          </div>

          {/* Model-viewer */}
          <div>
            <h2>AR Product Configurator</h2>
            <div className={styles.productCardsGrid}>
              {ARProducts.map((product, index) => {
                const slug = slugify(product.title);
                return (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.thumbnail}
                    isDummy={product.isDummy}
                    slug={slug}
                    key={product.title + index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
