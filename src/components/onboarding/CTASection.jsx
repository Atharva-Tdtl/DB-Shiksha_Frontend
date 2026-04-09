import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

const CTASection = ({ onGetStartedClick }) => {
  return (
    <Box 
      sx={{ 
        py: 10, 
        bgcolor: 'background.default', 
        textAlign: 'center',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 800, mb: 3 }}>
          🚀 Start Learning AI Today
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
          Join 10,000+ students and professionals who are shaping the future of technology.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
          <Button 
            variant="contained" 
            size="large" 
            onClick={onGetStartedClick}
            sx={{ px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 700 }}
          >
            Get Started
          </Button>
          <Button 
            variant="outlined" 
            size="large" 
            component={RouterLink}
            to="/programs"
            sx={{ px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 700, borderColor: '#D4AF37' }}
          >
            Explore Programs
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTASection;
