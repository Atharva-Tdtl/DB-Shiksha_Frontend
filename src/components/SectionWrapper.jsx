import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const SectionWrapper = ({ children, title, subtitle, id, bgcolor = 'transparent' }) => {
  return (
    <Box id={id} sx={{ py: { xs: 4, md: 6 }, bgcolor: bgcolor }}>
      <Container maxWidth="xl">
        {(title || subtitle) && (
          <Box sx={{ mb: 3, textAlign: 'center' }}>
            {title && (
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 2, fontWeight: 700 }}>
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                {subtitle}
              </Typography>
            )}
            <Box sx={{ width: 60, height: 4, bgcolor: '#D4AF37', mx: 'auto', mt: 3, borderRadius: 2 }} />
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default SectionWrapper;
