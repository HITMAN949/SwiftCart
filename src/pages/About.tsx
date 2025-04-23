import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

export const About: React.FC = () => {
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
        <Box 
          sx={{ 
            maxWidth: '1400px',
            mx: 'auto'
          }}
        >
          {/* Header Section */}
          <Box 
            sx={{ 
              mb: 8,
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
              About SwiftCart
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                mb: 4, 
                color: 'text.secondary',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
              }}
            >
              Learn more about our story, mission, and values
            </Typography>
          </Box>

          {/* Main Content */}
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
              gap: 6,
              mb: 8
            }}
          >
            <Paper 
              elevation={0}
              sx={{ 
                p: 4,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Our Story
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3, 
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}
              >
                Welcome to SwiftCart, your premier destination for quality products and exceptional shopping experiences. 
                Founded with a passion for delivering the best to our customers, we've grown from a small local shop 
                to a trusted online retailer.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}
              >
                Our commitment to quality, customer service, and innovation has made us a favorite among shoppers 
                worldwide. We carefully curate our product selection to ensure that every item meets our high 
                standards of excellence.
              </Typography>
            </Paper>

            <Paper 
              elevation={0}
              sx={{ 
                p: 4,
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                }}
              >
                Our Mission
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 3, 
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}
              >
                At SwiftCart, our mission is to provide our customers with the best shopping experience possible. 
                We strive to offer a wide selection of high-quality products at competitive prices, backed by 
                exceptional customer service.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', sm: '1.1rem' }
                }}
              >
                We believe in sustainable practices and ethical business operations. Our goal is to not only meet 
                but exceed customer expectations while maintaining our commitment to environmental responsibility.
              </Typography>
            </Paper>
          </Box>

          {/* Features Section */}
          <Box>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 6, 
                textAlign: 'center', 
                fontWeight: 600,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
              }}
            >
              Why Choose Us?
            </Typography>
            <Box 
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, 
                gap: 4 
              }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Quality Products
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  We carefully select each product to ensure the highest quality standards.
                </Typography>
              </Paper>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  Fast Shipping
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  Quick and reliable delivery to your doorstep.
                </Typography>
              </Paper>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 4,
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2, 
                    fontWeight: 600,
                    fontSize: { xs: '1.1rem', sm: '1.25rem' }
                  }}
                >
                  24/7 Support
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: { xs: '0.9rem', sm: '1rem' }
                  }}
                >
                  Our customer service team is always ready to help you.
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}; 