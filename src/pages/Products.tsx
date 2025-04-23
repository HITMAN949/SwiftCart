import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Skeleton,
  Button,
  Grid,
  CircularProgress,
  GridProps,
} from '@mui/material';
import { Search as SearchIcon, FilterList as FilterListIcon } from '@mui/icons-material';
import { ProductCard } from '../components/ProductCard';
import { useProducts } from '../hooks/useProducts';
import { Product } from '../types';
import { getProducts } from '../services/productService';

interface StyledGridProps extends GridProps {
  item?: boolean;
  container?: boolean;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  xl?: number | boolean;
}

const StyledGrid: React.FC<StyledGridProps> = (props) => {
  return <Grid {...props} />;
};

export const Products: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 8,
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container maxWidth="xl" sx={{ width: '100%' }}>
        {/* Header Section */}
        <Box 
          sx={{ 
            mb: 6,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2, 
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
            }}
          >
            Our Products
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4, 
              color: 'text.secondary',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
            }}
          >
            Discover our collection of premium products
          </Typography>
        </Box>

        {/* Search and Filter Section */}
        <Paper 
          elevation={0} 
          sx={{ 
            p: 3, 
            mb: 6, 
            border: '1px solid',
            borderColor: 'divider',
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 2,
            alignItems: { xs: 'stretch', md: 'center' },
            justifyContent: 'center'
          }}>
            <Box sx={{ flex: 1, maxWidth: '600px' }}>
              <TextField
                fullWidth
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'background.paper',
                  },
                }}
              />
            </Box>
            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
              minWidth: { xs: '100%', md: '300px' },
              justifyContent: 'center'
            }}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category} sx={{ textTransform: 'capitalize' }}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                onClick={() => setShowFilters(!showFilters)}
                sx={{ minWidth: { xs: '100%', sm: '120px' } }}
              >
                Filters
              </Button>
            </Box>
          </Box>
        </Paper>

        {/* Products Grid */}
        {loading ? (
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 4,
            maxWidth: '1400px',
            mx: 'auto'
          }}>
            {[...Array(8)].map((_, index) => (
              <Paper
                key={index}
                sx={{
                  p: 2,
                  height: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                <Skeleton variant="rectangular" height={200} />
                <Skeleton variant="text" height={40} />
                <Skeleton variant="text" height={20} width="60%" />
                <Skeleton variant="text" height={20} width="40%" />
              </Paper>
            ))}
          </Box>
        ) : error ? (
          <Box sx={{ 
            textAlign: 'center', 
            py: 8,
            maxWidth: '600px',
            mx: 'auto'
          }}>
            <Typography variant="h5" color="error" gutterBottom>
              Error loading products
            </Typography>
            <Typography color="text.secondary">
              {error}
            </Typography>
          </Box>
        ) : filteredProducts.length === 0 ? (
          <Box sx={{ 
            textAlign: 'center', 
            py: 8,
            maxWidth: '600px',
            mx: 'auto'
          }}>
            <Typography variant="h5" gutterBottom>
              No products found
            </Typography>
            <Typography color="text.secondary">
              Try adjusting your search or filter criteria
            </Typography>
          </Box>
        ) : (
          <StyledGrid container spacing={3}>
            {filteredProducts.map((product) => (
              <StyledGrid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductCard product={product} />
              </StyledGrid>
            ))}
          </StyledGrid>
        )}
      </Container>
    </Box>
  );
}; 