import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Container,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  InputBase,
  alpha,
  Link,
} from '@mui/material';
import {
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
  Menu as MenuIcon,
  Search as SearchIcon,
  Favorite as FavoriteIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useCart } from '../context/CartContext';
import { Cart } from './Cart';

export const Navbar: React.FC = () => {
  const { state } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'Shop', path: '/products' },
    { text: 'About', path: '/about' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={0}
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Left Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setIsMenuOpen(true)}
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                <Link
                  component={RouterLink}
                  to="/"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    mr: 4
                  }}
                >
                  <Box
                    component="img"
                    src="/swiftcart-logo.png"
                    alt="SwiftCart"
                    sx={{
                      height: 120,
                      mr: 1,
                      display: 'block',
                      objectFit: 'contain',
                      filter: 'brightness(1)',
                    }}
                  />
                </Link>
              </Box>
            </Box>

            {/* Center Section - Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 3 }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={RouterLink}
                  to={item.path}
                  color="inherit"
                  sx={{ 
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* Right Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton 
                color="inherit"
                onClick={() => setIsSearchOpen(true)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(34, 34, 34, 0.04)',
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton 
                color="inherit"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(34, 34, 34, 0.04)',
                  },
                }}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton 
                color="inherit"
                onClick={() => setIsCartOpen(true)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(34, 34, 34, 0.04)',
                  },
                }}
              >
                <Badge 
                  badgeContent={state.items.length} 
                  color="primary"
                  sx={{
                    '& .MuiBadge-badge': {
                      backgroundColor: '#222222',
                      color: '#ffffff',
                    },
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton 
                color="inherit"
                onClick={handleMenuClick}
                sx={{ 
                  display: { xs: 'none', sm: 'flex' },
                  '&:hover': {
                    backgroundColor: 'rgba(34, 34, 34, 0.04)',
                  },
                }}
              >
                <PersonIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Search Overlay */}
      <Drawer
        anchor="top"
        open={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setIsSearchOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center',
          height: '100%',
          p: 2,
        }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
            Search Products
          </Typography>
          <Box sx={{ 
            width: '100%', 
            maxWidth: 600,
            position: 'relative',
          }}>
            <InputBase
              placeholder="Search for products..."
              sx={{
                width: '100%',
                p: 2,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 0,
                '&:hover': {
                  borderColor: 'primary.main',
                },
                '&.Mui-focused': {
                  borderColor: 'primary.main',
                },
              }}
              autoFocus
            />
            <IconButton 
              sx={{ 
                position: 'absolute',
                right: 8,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            SwiftCart
          </Typography>
          <IconButton onClick={() => setIsMenuOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem 
              key={item.text}
              component={RouterLink}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(34, 34, 34, 0.04)',
                },
              }}
            >
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', mt: 2 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMenuOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box
              component="img"
              src="/swiftcart-logo.png"
              alt="SwiftCart"
              sx={{
                height: 120,
                mr: 1,
                display: 'block',
                objectFit: 'contain',
                filter: 'brightness(1)',
              }}
            />
          </Link>
        </Box>
      </Drawer>

      {/* Cart Drawer */}
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '100%', sm: 400 },
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        <Cart />
      </Drawer>

      {/* User Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          '& .MuiPaper-root': {
            minWidth: 180,
            mt: 1.5,
            borderRadius: 1,
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          },
        }}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Orders</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </>
  );
}; 