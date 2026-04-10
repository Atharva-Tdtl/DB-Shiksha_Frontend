import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Logo from '../assets/DBShiksha-Logo.png';

const Footer = () => {
  return (

    <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 4, mt: 'auto', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>

    <Box 
      sx={{ 
        bgcolor: 'background.paper', 
        pt: 8, 
        pb: 4, 
        mt: 'auto', 
        borderTop: '1px solid rgba(212, 175, 55, 0.1)' 
      }}
    >

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Box 
                component="img" 
                src={Logo} 
                alt="DBShiksha Logo" 
                sx={{ height: 60, width: 'auto' }} 
              />
              <Typography variant="h5" sx={{ color: '#D4AF37', fontWeight: 800 }}>
                DB<Box component="span" sx={{ color: 'text.primary' }}>SHIKSHA</Box>
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 300, mb: 3 }}>
              Empowering the next generation of AI leaders through industry-standard courses and hands-on learning.
            </Typography>

            <Box sx={{ mt: 3 }}>

            <Box sx={{ display: 'flex', gap: 1 }}>

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
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Email: empower@tdtl.world</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Phone: +91 92255 84954</Typography>
            <Typography variant="body2" color="text.secondary">Address: Bavdhan, Pune, Maharashtra, India</Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(212, 175, 55, 0.1)' }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} DBShiksha. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
