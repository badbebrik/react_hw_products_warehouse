import React, { FC, useState, useRef, useCallback, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
} from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import ProductModal from "../ProductModal/ProductModal";
import { Product } from "../../types/Product";

interface ProductListProps {
  products: Product[];
}

const ITEMS_PER_LOAD = 6;

const ProductList: FC<ProductListProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setVisibleProducts(products.slice(0, ITEMS_PER_LOAD));
    setHasMore(products.length > ITEMS_PER_LOAD);
  }, [products]);

  const loadMoreProducts = useCallback(() => {
    const currentLength = visibleProducts.length;
    const isMore = currentLength < products.length;
    const nextResults = isMore
      ? products.slice(currentLength, currentLength + ITEMS_PER_LOAD)
      : [];
    setVisibleProducts((prev) => [...prev, ...nextResults]);
    setHasMore(currentLength + nextResults.length < products.length);
  }, [visibleProducts.length, products]);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore) {
        loadMoreProducts();
      }
    },
    [loadMoreProducts, hasMore]
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "20px",
      threshold: 1.0, 
    });

    if (lastProductElementRef.current) {
      observer.current.observe(lastProductElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [handleObserver, visibleProducts]);

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  if (products.length === 0) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h6" color="text.secondary">
          Нет товаров, соответствующих выбранным фильтрам.
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={3}>
        {visibleProducts.map((product, index) => {
          if (index === visibleProducts.length - 1) {
            return (
              <Grid
                item
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                ref={lastProductElementRef}
              >
                <ProductCard
                  product={product}
                  onClick={() => handleCardClick(product)}
                />
              </Grid>
            );
          } else {
            return (
              <Grid
                item
                key={product.id}
                xs={12}
                sm={6}
                md={4}
              >
                <ProductCard
                  product={product}
                  onClick={() => handleCardClick(product)}
                />
              </Grid>
            );
          }
        })}
      </Grid>

      {hasMore && (
        <Box textAlign="center" mt={2}>
          <Typography variant="body1">Загрузка...</Typography>
        </Box>
      )}

      {selectedProduct && (
        <ProductModal
          isOpen={Boolean(selectedProduct)}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </Box>
  );
};

export default ProductList;
