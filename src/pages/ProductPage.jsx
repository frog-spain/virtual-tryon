// Libraries
import React, { useState, useMemo, Suspense, lazy } from "react";
import { useParams, Link } from "react-router-dom";
// Dependencies
import { productList } from "./ProductDemoPage/products-list";
import { slugify } from "../utils/slugify";
import { formatPrice } from "../utils/formatPrice";
// UI
import OptionButton from "../ui/OptionButton";
import { HiVideoCamera } from "react-icons/hi2";
import Modal from "../ui/Modal";

// Simple ErrorBoundary for the modal content to catch lazy load/render errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) return <div>Failed to load preview.</div>;
    return this.props.children;
  }
}

const ProductPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { slug } = useParams();
  const product = productList.find(p => slugify(p.title) === slug);

  const LazyContent = useMemo(() => {
    if (!product?.content) return null;
    return lazy(product.content);
  }, [product?.content]);

  if (!product) {
    return (
      <div className="product-page">
        <h2>Product not found</h2>
        <Link to="/product-demo">Back to products</Link>
      </div>
    );
  }

  return (
    <>
      <div className="product-page">
        <Link to="/product-demo" className="back-button">
          ← Back to products
        </Link>
        <div className="product-wapper">
          {/* Product image */}
          <div className="product-image-wrapper">
            {product.action.label && (
              <OptionButton
                label={product.action.label}
                icon={<HiVideoCamera />}
                isRounded
                className="try-on-button"
                onClick={() => setIsModalOpen(true)}
              />
            )}
            <div className="product-image">
              <img src="/assets/images/image.png" />
            </div>
          </div>

          {/* Product details */}
          <div className="product-details">
            <h2>{product.title}</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <OptionButton
                label="Add to cart"
                onClick={() => alert("Product added to cart!")}
              />
              <span
                style={{ fontSize: 12, fontWeight: 200, color: "#7b7b7bff" }}
              >
                Delivery in 4-6 working days | Free returns and exchanges
              </span>
            </div>

            <p>{formatPrice(product.price)}</p>
            <p style={{ fontWeight: 200 }}>{product.description}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && LazyContent && (
        <Modal onClose={() => setIsModalOpen(false)} open={isModalOpen}>
          {/* <product.content /> */}
          <ErrorBoundary>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyContent />
            </Suspense>
          </ErrorBoundary>
        </Modal>
      )}
    </>
  );
};

export default ProductPage;
