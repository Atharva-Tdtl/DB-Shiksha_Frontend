import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import ButtonPrimary from './ButtonPrimary';

const CardCourse = ({ title, image, price, level, category, onClick }) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-8px)' } }}>
      <CardMedia
        component="img"
        height="180"
        image={image || 'https://via.placeholder.com/300x180?text=AI+Course'}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Chip label={category} size="small" sx={{ bgcolor: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37' }} />
          <Typography variant="body2" color="text.secondary">{level}</Typography>
        </Box>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ my: 1 }}>
          ₹{price}
        </Typography>
      </CardContent>
      <Box sx={{ p: 2, pt: 0 }}>
        <ButtonPrimary fullWidth onClick={onClick}>View Details</ButtonPrimary>
      </Box>
    </Card>
  );
};

export default CardCourse;
