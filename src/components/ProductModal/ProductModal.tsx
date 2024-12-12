import React, { FC } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Product } from "../../types/Product";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const ProductModal: FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const { name, description, category, quantity, unit, imageUrl } = product;

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent dividers>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
          {imageUrl ? (
            <Box flex={1}>
              <img
                src={imageUrl}
                alt={name}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </Box>
          ) : (
            <Box
              flex={1}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="#f0f0f0"
              height={200}
            >
              <Typography variant="h6" color="text.secondary">
                Нет изображения
              </Typography>
            </Box>
          )}
          <Box flex={2}>
            <Typography variant="subtitle1" gutterBottom>
              Описание:
            </Typography>
            <Typography variant="body1" paragraph>
              {description || "Нет описания."}
            </Typography>
            <Typography variant="subtitle1">Категория:</Typography>
            <Typography variant="body1" paragraph>
              {category || "Не указано"}
            </Typography>
            <Typography variant="subtitle1">Количество:</Typography>
            <Typography variant="body1">
              {quantity} {unit}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" variant="contained">
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductModal;
