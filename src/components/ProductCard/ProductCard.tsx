import React, { FC } from "react";
import { FaBoxOpen } from "react-icons/fa";
import "./ProductCard.css";

interface ProductCardProps {
  name: string;
  description?: string;
  category?: string;
  quantity: number;
  unit: string;
  imageUrl?: string;
  onClick: () => void;
}

const ProductCard: FC<ProductCardProps> = ({
  name,
  description,
  category,
  quantity,
  unit,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="product-card" onClick={onClick}>
      <div
        className={`product-card__image ${
          imageUrl
            ? "product-card__image--has-image"
            : "product-card__image--no-image"
        }`}
      >
        {imageUrl ? (
          <img src={imageUrl} alt={name} />
        ) : (
          <div className="product-card__no-image">
            <FaBoxOpen size={48} color="#ccc" />
            <p>Нет изображения</p>
          </div>
        )}
      </div>
      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        {description && (
          <p className="product-card__description">{description}</p>
        )}
        {category && (
          <p className="product-card__category">Категория: {category}</p>
        )}
        <p className="product-card__quantity">
          Количество: {quantity} {unit}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
