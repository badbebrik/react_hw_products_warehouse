import React, { FC, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import "./ProductModal.css";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  description?: string;
  category?: string;
  quantity: number;
  unit: string;
  imageUrl?: string;
}

const ProductModal: FC<ProductModalProps> = ({
  isOpen,
  onClose,
  name,
  description,
  category,
  quantity,
  unit,
  imageUrl,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          <FaTimes />
        </button>
        <div className="modal-body">
          <div className="modal-image-container">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="modal-image" />
            ) : (
              <div className="modal-no-image">
                <FaBoxOpen size={64} color="#ccc" />
                <p>Нет изображения</p>
              </div>
            )}
          </div>
          <div className="modal-info">
            <h2 className="modal-title">{name}</h2>
            {description && <p className="modal-description">{description}</p>}
            {category && (
              <p className="modal-category">Категория: {category}</p>
            )}
            <p className="modal-quantity">
              Количество: {quantity} {unit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
