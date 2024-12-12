import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Tooltip,
  styled,
} from "@mui/material";
import { Product } from "../../types/Product";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const StyledCard = styled(Card)(({ theme }) => ({
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
  cursor: "pointer",
}));

const ProductCard: FC<ProductCardProps> = ({ product, onClick }) => {
  const { name, description, category, quantity, unit, imageUrl } = product;

  return (
    <Tooltip title={description || "Нет описания"} arrow>
      <StyledCard onClick={onClick}>
        <CardHeader
          title={name}
          subheader={category}
          titleTypographyProps={{ variant: "h6", noWrap: true }}
          subheaderTypographyProps={{ variant: "subtitle2", color: "text.secondary" }}
          sx={{
            "& .MuiCardHeader-title": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
            "& .MuiCardHeader-subheader": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          }}
        />
        {imageUrl ? (
          <CardMedia
            component="img"
            height="180"
            image={imageUrl}
            alt={name}
            sx={{ objectFit: "contain", backgroundColor: "#f9fafb" }}
          />
        ) : (
          <CardContent
            sx={{
              height: 180,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Нет изображения
            </Typography>
          </CardContent>
        )}
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Количество: {quantity} {unit}
          </Typography>
        </CardContent>
      </StyledCard>
    </Tooltip>
  );
};

export default ProductCard;
