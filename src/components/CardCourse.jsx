import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ButtonPrimary from './ButtonPrimary';
import { useNavigate } from 'react-router-dom';


const CardCourse = ({ id, title, image, price, level, category, description, duration, onClick }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="card" 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        borderRadius: 3, 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
        transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
        '&:hover': { 
          transform: 'translateY(-8px)', 
          boxShadow: '0 12px 24px rgba(212, 175, 55, 0.2)' 
        } 
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={image || 'https://via.placeholder.com/300x180?text=AI+Course'}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          {category && <Chip label={category} size="small" sx={{ bgcolor: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37', fontWeight: 600 }} />}
          {level && <Typography variant="caption" color="text.secondary" sx={{ alignSelf: 'center', fontWeight: 500 }}>{level}</Typography>}
        </Box>
        <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary" component="p" sx={{ mb: 3, flexGrow: 1 }}>
            {description}
          </Typography>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto', p: 1, bgcolor: 'background.default', borderRadius: 2 }}>
          {duration && (
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary', gap: 0.5 }}>
              <AccessTimeIcon fontSize="small" color="primary" />
              <Typography variant="body2" component="span" sx={{ fontWeight: 600 }}>{duration}</Typography>
            </Box>
          )}
          <Typography variant="h6" color="primary" component="span" sx={{ fontWeight: 800 }}>
            ₹{price}
          </Typography>
        </Box>
      </CardContent>


      <Box sx={{ px: 3, pb: 3 }}>
        <ButtonPrimary fullWidth onClick={onClick || (() => navigate('/programs'))}>View Details</ButtonPrimary>

      <Box sx={{ p: 2, pt: 0 }}>
        <ButtonPrimary 
          fullWidth 
          onClick={onClick ? onClick : () => navigate('/programs')}
        >
          View Details
        </ButtonPrimary>

      </Box>
    </Card>
  );
};

export default CardCourse;
