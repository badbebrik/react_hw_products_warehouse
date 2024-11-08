import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
import products from "../../data/products.json";
import { Product } from "../../types/Product";
import "./ProductList.css";

const ProductList: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            onClick={() => handleCardClick(product)}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={handleCloseModal}
          {...selectedProduct}
        />
      )}
    </>
  );
};

export default ProductList;
