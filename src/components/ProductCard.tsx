import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Rating,
  Button,
} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          '& .product-actions': {
            transform: 'translateY(0)',
          },
          '& .product-image': {
            transform: 'scale(1.05)',
          },
        },
      }}
    >
      <Box sx={{ position: 'relative', pt: '100%', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.name}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
          className="product-image"
        />
        <Box
          className="product-actions"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            p: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            transform: 'translateY(100%)',
            transition: 'transform 0.3s ease',
          }}
        >
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
            sx={{
              flex: 1,
              maxWidth: 200,
            }}
          >
            Add to Cart
          </Button>
          <IconButton
            sx={{
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
              },
            }}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
        >
          {product.category}
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 600,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {product.name}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 'auto' }}>
          <Rating value={product.rating.rate} precision={0.5} size="small" readOnly />
          <Typography variant="body2" color="text.secondary">
            ({product.rating.count})
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1 }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" color={product.stock > 0 ? 'success.main' : 'error.main'}>
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}; 