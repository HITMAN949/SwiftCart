import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Stack,
  SvgIcon,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { GridProps } from '@mui/material';
import {
  Facebook,
  Instagram,
  Pinterest,
} from '@mui/icons-material';

// Payment method icons as SVG paths
const PaymentIcons = {
  visa: (props: any) => (
    <SvgIcon {...props} viewBox="0 0 38 24">
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#EB001B"/>
      <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#F79E1B"/>
    </SvgIcon>
  ),
  mastercard: (props: any) => (
    <SvgIcon {...props} viewBox="0 0 38 24">
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"/>
      <path d="M15 19h8V5h-8v14z" fill="#FF5F00"/>
      <path d="M15.8 12c0-2.8 1.3-5.3 3.3-7-1.5-1.2-3.4-2-5.5-2-4.8 0-8.7 3.9-8.7 8.7s3.9 8.7 8.7 8.7c2.1 0 4-.7 5.5-2-2-1.6-3.3-4.1-3.3-6.9z" fill="#EB001B"/>
      <path d="M32.2 12c0 4.8-3.9 8.7-8.7 8.7-2.1 0-4-.7-5.5-2 2-1.6 3.3-4.1 3.3-6.9s-1.3-5.3-3.3-7c1.5-1.2 3.4-2 5.5-2 4.8 0 8.7 3.9 8.7 8.7z" fill="#F79E1B"/>
    </SvgIcon>
  ),
  amex: (props: any) => (
    <SvgIcon {...props} viewBox="0 0 38 24">
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#2E77BC"/>
      <path d="M15 8l-2 5-2-5h-3l3.5 8H14l3.5-8H15zm10 0h-3l-2 5-2-5h-3l3.5 8H21l3.5-8H25z" fill="#FFF"/>
    </SvgIcon>
  ),
  paypal: (props: any) => (
    <SvgIcon {...props} viewBox="0 0 38 24">
      <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#003087"/>
      <path d="M20 12c0 1.1-.9 2-2 2h-3l-.5 2h4c1.1 0 2-.9 2-2s-.9-2-2-2h-3l-.5 2h4c1.1 0 2-.9 2-2z" fill="#FFF"/>
    </SvgIcon>
  ),
};

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

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#222222',
        color: '#ffffff',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <StyledGrid container spacing={8}>
          {/* Categories Section */}
          <StyledGrid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              CATEGORIES
            </Typography>
            <Stack spacing={1}>
              <Link
                component={RouterLink}
                to="/category/women"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Women
              </Link>
              <Link
                component={RouterLink}
                to="/category/men"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Men
              </Link>
              <Link
                component={RouterLink}
                to="/category/shoes"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Shoes
              </Link>
              <Link
                component={RouterLink}
                to="/category/watches"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Watches
              </Link>
            </Stack>
          </StyledGrid>

          {/* Help Section */}
          <StyledGrid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              HELP
            </Typography>
            <Stack spacing={1}>
              <Link
                component={RouterLink}
                to="/track-order"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Track Order
              </Link>
              <Link
                component={RouterLink}
                to="/returns"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Returns
              </Link>
              <Link
                component={RouterLink}
                to="/shipping"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                Shipping
              </Link>
              <Link
                component={RouterLink}
                to="/faqs"
                color="inherit"
                sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}
              >
                FAQs
              </Link>
            </Stack>
          </StyledGrid>

          {/* Get in Touch Section */}
          <StyledGrid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              GET IN TOUCH
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.7)' }}>
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{ '&:hover': { color: 'primary.main' } }}
              >
                <Pinterest />
              </IconButton>
            </Stack>
          </StyledGrid>

          {/* Newsletter Section */}
          <StyledGrid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
              NEWSLETTER
            </Typography>
            <Box component="form" noValidate>
              <TextField
                fullWidth
                placeholder="email@example.com"
                variant="outlined"
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.23)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                  '& .MuiOutlinedInput-input': {
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.5)',
                      opacity: 1,
                    },
                  },
                }}
                InputProps={{
                  sx: { borderRadius: 0 },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  py: 1.5,
                  borderRadius: 0,
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                SUBSCRIBE
              </Button>
            </Box>
          </StyledGrid>
        </StyledGrid>

        {/* Payment Methods and Copyright */}
        <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <StyledGrid container justifyContent="center" alignItems="center" spacing={3}>
            <StyledGrid item>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <PaymentIcons.visa sx={{ fontSize: 40, color: '#fff' }} />
                <PaymentIcons.mastercard sx={{ fontSize: 40, color: '#fff' }} />
                <PaymentIcons.amex sx={{ fontSize: 40, color: '#fff' }} />
                <PaymentIcons.paypal sx={{ fontSize: 40, color: '#fff' }} />
              </Box>
            </StyledGrid>
          </StyledGrid>
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.7)' }}
          >
            Copyright ©{new Date().getFullYear()} SwiftCart. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}; 