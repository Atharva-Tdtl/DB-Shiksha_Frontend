import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 4, mt: 'auto', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ color: '#D4AF37', fontWeight: 800, mb: 2 }}>
              DB<Box component="span" sx={{ color: 'text.primary' }}>SHIKSHA</Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300 }}>
              Empowering the next generation of AI leaders through industry-standard courses and hands-on learning.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <IconButton sx={{ color: 'text.primary', '&:hover': { color: '#D4AF37' } }}><FacebookIcon /></IconButton>
              <IconButton sx={{ color: 'text.primary', '&:hover': { color: '#D4AF37' } }}><TwitterIcon /></IconButton>
              <IconButton sx={{ color: 'text.primary', '&:hover': { color: '#D4AF37' } }}><LinkedInIcon /></IconButton>
              <IconButton sx={{ color: 'text.primary', '&:hover': { color: '#D4AF37' } }}><InstagramIcon /></IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 2 }}>Platform</Typography>
            <Link href="/programs" color="text.secondary" underline="hover" sx={{ display: 'block', mb: 1 }}>Programs</Link>
            <Link href="/certifications" color="text.secondary" underline="hover" sx={{ display: 'block', mb: 1 }}>Certifications</Link>
            <Link href="/dashboard" color="text.secondary" underline="hover" sx={{ display: 'block', mb: 1 }}>Login</Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 2 }}>Support</Typography>
            <Link href="/contact" color="text.secondary" underline="hover" sx={{ display: 'block', mb: 1 }}>Contact Us</Link>
            <Link href="/faq" color="text.secondary" underline="hover" sx={{ display: 'block', mb: 1 }}>FAQ</Link>
            <Link href="/privacy" color="text.secondary" underline="hover" sx={{ display: 'block', mb: 1 }}>Privacy Policy</Link>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: 'text.primary', mb: 2 }}>Contact Us</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Email: support@dbshiksha.com</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Phone: +91 98765 43210</Typography>
            <Typography variant="body2" color="text.secondary">Address: Bangalore, KA, India</Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'divider' }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} DBShiksha. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
