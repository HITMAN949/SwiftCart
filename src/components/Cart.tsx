import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Paper,
  Container,
  Divider,
  TextField,
  InputAdornment,
  Stack,
  Tooltip,
  Grid,
} from '@mui/material';
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Delete as DeleteIcon,
  ShoppingCart as ShoppingCartIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleQuantityChange = (item: CartItem, change: number) => {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: newQuantity } });
    } else {
      dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 4,
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container maxWidth="lg" sx={{ width: '100%' }}>
        {/* Header Section */}
        <Box 
          sx={{ 
            mb: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            href="/products"
            sx={{ 
              textTransform: 'none',
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'transparent',
                color: 'primary.main'
              }
            }}
          >
            Continue Shopping
          </Button>
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '1.25rem', sm: '1.5rem' }
            }}
          >
            Cart ({state.items.length})
          </Typography>
        </Box>

        {state.items.length === 0 ? (
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 8,
              maxWidth: '400px',
              mx: 'auto'
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              Add some products to your cart to see them here
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              href="/products"
              sx={{ 
                px: 3,
                py: 1,
                borderRadius: 1,
                textTransform: 'none'
              }}
            >
              Start Shopping
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {/* Cart Items */}
            <Grid item xs={12} md={8}>
              <Paper 
                elevation={0}
                sx={{ 
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1
                }}
              >
                {state.items.map((item, index) => (
                  <Box key={item.id}>
                    <Box sx={{ 
                      display: 'flex', 
                      p: 2,
                      alignItems: 'center',
                      gap: 2
                    }}>
                      <Box 
                        sx={{ 
                          width: 60,
                          height: 60,
                          position: 'relative',
                          borderRadius: 1,
                          overflow: 'hidden',
                          flexShrink: 0,
                          cursor: 'pointer',
                          '&:hover': {
                            opacity: 0.9
                          }
                        }}
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography 
                          variant="subtitle2" 
                          sx={{ 
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          color="text.secondary"
                          sx={{ 
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}
                        >
                          ${item.price.toFixed(2)} each
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        gap: 1
                      }}>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 1
                        }}>
                          <Tooltip title="Decrease quantity">
                            <IconButton 
                              size="small"
                              onClick={() => handleQuantityChange(item, -1)}
                              sx={{ 
                                p: 0.5,
                                borderRadius: 0,
                                borderRight: '1px solid',
                                borderColor: 'divider'
                              }}
                            >
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <TextField
                            value={item.quantity}
                            size="small"
                            sx={{ 
                              width: '32px',
                              '& .MuiOutlinedInput-root': {
                                borderRadius: 0,
                                '& fieldset': { border: 'none' }
                              }
                            }}
                            inputProps={{
                              style: { 
                                textAlign: 'center', 
                                padding: '4px',
                                fontSize: '0.875rem'
                              }
                            }}
                          />
                          <Tooltip title="Increase quantity">
                            <IconButton 
                              size="small"
                              onClick={() => handleQuantityChange(item, 1)}
                              sx={{ 
                                p: 0.5,
                                borderRadius: 0,
                                borderLeft: '1px solid',
                                borderColor: 'divider'
                              }}
                            >
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Typography 
                          variant="subtitle2" 
                          color="primary" 
                          sx={{ 
                            fontWeight: 600,
                            minWidth: '60px',
                            textAlign: 'right'
                          }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </Typography>
                        <Tooltip title="Remove item">
                          <IconButton 
                            color="error"
                            onClick={() => handleRemoveItem(item.id)}
                            size="small"
                            sx={{ p: 0.5 }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                    {index < state.items.length - 1 && <Divider />}
                  </Box>
                ))}
              </Paper>
            </Grid>

            {/* Order Summary */}
            <Grid item xs={12} md={4}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 1,
                  position: { md: 'sticky' },
                  top: 24
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">Subtotal</Typography>
                    <Typography variant="body2">${subtotal.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">Shipping</Typography>
                    <Typography variant="body2">${shipping.toFixed(2)}</Typography>
                  </Box>
                  <Divider sx={{ my: 1 }} />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Total</Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                      ${total.toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    py: 1,
                    borderRadius: 1,
                    textTransform: 'none'
                  }}
                >
                  Proceed to Checkout
                </Button>
              </Paper>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
}; 