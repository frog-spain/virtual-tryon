// UI
import BackButton from "../../ui/BackButton";
import ProductCard from "./ProductCard";
// Dependencies
import { slugify } from "../../utils/slugify";
import styles from "./index.module.scss";
import { TryOn3dProducts, ARProducts, AIProducts } from "./products-list";

const ProductList = () => {
  return (
    <div className="demo-container">
      <BackButton />

      <div className="product-cards-page">
        <h1 style={{ marginBottom: 40 }}>Marketplace Demo</h1>
        <div className={styles.productListWrapper}>
          <div>
            <h2>3D Try-on</h2>
            <div className={styles.productCardsGrid}>
              {TryOn3dProducts.map(product => {
                const slug = slugify(product.title);
                return (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.thumbnail}
                    isDummy={product.isDummy}
                    slug={slug}
                    key={product.title}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2>AI Outfit Try-on</h2>
            <div className={styles.productCardsGrid}>
              {AIProducts.map(product => {
                const slug = slugify(product.title);
                return (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.thumbnail}
                    isDummy={product.isDummy}
                    slug={slug}
                    key={product.title}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2>AR Product Configurator</h2>
            <div className={styles.productCardsGrid}>
              {ARProducts.map(product => {
                const slug = slugify(product.title);
                return (
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.thumbnail}
                    isDummy={product.isDummy}
                    slug={slug}
                    key={product.title}
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
