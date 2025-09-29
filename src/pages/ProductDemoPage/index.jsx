import BackButton from '../../ui/BackButton';
import { productList } from './products-list';
import ProductCard from './ProductCard';

const ProductDemoPage = () => {
  return (
    <div className="demo-container">
      <BackButton />

      <div className="demo">
        <h1>3D Marketplace Demo</h1>

        {productList.map((product) => {
          <ProductCard title={product.title} price={product.price} />;
        })}
      </div>
    </div>
  );
};

export default ProductDemoPage;
