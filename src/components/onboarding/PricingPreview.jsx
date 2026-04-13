import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Divider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../ButtonPrimary';

const plans = [
  { title: 'AI Foundations', price: '₹1,999', features: ['Core AI Basics', 'Tool Mastery', 'Certification'] },
  { title: 'Professional Track', price: '₹3,999', features: ['Job-Ready Training', 'Expert Mentorship', 'Live Projects'], popular: true },
  { title: 'Leader Track', price: '₹6,999', features: ['AI Strategy', 'Executive Coaching', 'Business Case Studies'] },
];

const PricingPreview = () => {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}>
        Simple, Transparent Pricing
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
        Start your transformation from as low as ₹1,499
      </Typography>
      <Grid container spacing={4} alignItems="center">
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card 
              sx={{ 
                p: 2, 
                bgcolor: 'background.paper', 
                border: '1px solid',
                borderColor: plan.popular ? '#D4AF37' : 'rgba(212, 175, 55, 0.1)',
                position: 'relative',
                transform: plan.popular ? 'scale(1.05)' : 'none',
                zIndex: plan.popular ? 2 : 1
              }}
            >
              {plan.popular && (
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 12, 
                    right: 12, 
                    bgcolor: '#D4AF37', 
                    color: 'black', 
                    px: 1.5, 
                    py: 0.5, 
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 800
                  }}
                >
                  MOST POPULAR
                </Box>
              )}
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 1 }}>{plan.title}</Typography>
                <Typography variant="h4" sx={{ color: '#D4AF37', fontWeight: 800, mb: 3 }}>
                  {plan.price}
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Stack spacing={2} sx={{ mb: 4 }}>
                  {plan.features.map((f, i) => (
                    <Typography key={i} variant="body2" color="text.secondary">
                      {f}
                    </Typography>
                  ))}
                </Stack>
                <ButtonPrimary 
                  fullWidth 
                  variant={plan.popular ? 'contained' : 'outlined'}
                  onClick={() => navigate('/programs')}
                >
                  Select Plan
                </ButtonPrimary>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PricingPreview;
