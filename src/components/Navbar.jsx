import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { useColorMode } from '../theme/ThemeContext';
import Logo from '../assets/DBShiksha-Logo.png';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Certifications', path: '/certifications' },

  { name: 'Enterprise', path: '/enterprise' },

  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },

  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleColorMode, mode } = useColorMode();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const activeLinkStyle = {
    color: '#D4AF37',
    borderBottom: '2px solid #D4AF37',
    borderRadius: 0,
    backgroundColor: 'transparent',
  };

  const navLinkStyle = {
    color: mode === 'dark' ? '#FFFFFF' : '#0D0D0D',
    mx: 1,
    padding: '8px 4px',
    '&:hover': {
      color: '#D4AF37',
      backgroundColor: 'transparent',
    },
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.default', height: '100%', color: 'text.primary', pt: 2 }}>
      <Box 
        component={RouterLink} 
        to="/" 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          py: 2 
        }}
      >
        <Box 
          component="img" 
          src={Logo} 
          alt="DBShiksha Logo" 
          sx={{ height: 80, width: 'auto' }} 
        />
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding component={RouterLink} to={item.path} sx={{ color: 'text.primary', display: 'block' }}>
            <ListItemText primary={item.name} sx={{ textAlign: 'center' }} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" fullWidth component={RouterLink} to="/dashboard" sx={{ mb: 2 }}>Login</Button>
        <Button variant="outlined" fullWidth onClick={toggleColorMode} startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
          {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Box>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: mode === 'dark' ? 'rgba(13, 13, 13, 0.95)' : 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', backgroundImage: 'none', boxShadow: 'none', color: 'text.primary' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 0 }, py: { xs: 1, md: 1.5 } }}>
          <Box 
            component={RouterLink} 
            to="/" 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            <Box 
              component="img" 
              src={Logo} 
              alt="DBShiksha Logo" 
              sx={{ height: { xs: 60, md: 80 }, width: 'auto' }} 
            />
          </Box>
          
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button 
                key={item.name} 
                component={RouterLink} 
                to={item.path} 
                sx={{ 
                  ...navLinkStyle,
                  ...(location.pathname === item.path ? activeLinkStyle : {})
                }}
              >
                {item.name}
              </Button>
            ))}
            
            <IconButton onClick={toggleColorMode} color="inherit" sx={{ ml: 1, mr: 1 }}>
              {mode === 'dark' ? <Brightness7Icon color="primary" /> : <Brightness4Icon color="primary" />}
            </IconButton>

            <Button
              variant="contained"
              component={RouterLink}
              to="/dashboard"
              sx={{ ml: 1 }}
            >
              Get Started
            </Button>
          </Box>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: '#0D0D0D' },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
