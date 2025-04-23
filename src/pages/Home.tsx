import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';

export const Home: React.FC = () => {
  const { products, loading } = useProducts();

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          width: '100%',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #222222 30%, #333333 90%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              maxWidth: '1400px',
              mx: 'auto'
            }}
          >
            <Box sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  fontWeight: 700,
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Welcome to SwiftCart
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: '600px',
                  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                  lineHeight: 1.5
                }}
              >
                Discover our latest collection of premium products at unbeatable prices.
              </Typography>
              <Button
                variant="contained"
                size="large"
                href="/products"
                sx={{
                  backgroundColor: 'white',
                  color: '#222222',
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  },
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Box 
        sx={{ 
          width: '100%',
          py: 8,
          px: { xs: 2, sm: 3, md: 4 }
        }}
      >
        <Container maxWidth="xl" sx={{ width: '100%' }}>
          <Box 
            sx={{ 
              maxWidth: '1400px',
              mx: 'auto'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 6,
                textAlign: 'center',
                fontWeight: 700,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
              }}
            >
              Featured Products
            </Typography>
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: { 
                  xs: '1fr', 
                  sm: 'repeat(2, 1fr)', 
                  md: 'repeat(3, 1fr)',
                  lg: 'repeat(4, 1fr)'
                }, 
                gap: 4 
              }}
            >
              {products.slice(0, 4).map((product) => (
                <Box key={product.id}>
                  <ProductCard product={product} />
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}; 