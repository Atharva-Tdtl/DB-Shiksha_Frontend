import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import ButtonPrimary from '../../components/ButtonPrimary';
import SectionWrapper from '../../components/SectionWrapper';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <SectionWrapper>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="overline" sx={{ color: '#D4AF37', fontWeight: 600, letterSpacing: 2 }}>
            EMPOWER YOUR FUTURE
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, mt: 2, mb: 3, lineHeight: 1.1 }}>
            Master AI with <Box component="span" sx={{ color: '#D4AF37' }}>DBShiksha</Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
            The India's leading AI learning platform. Get industry-standard certifications and job-ready skills in Artificial Intelligence and Machine Learning.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <ButtonPrimary size="large" sx={{ px: 4 }} onClick={() => navigate('/programs')}>Explore Programs</ButtonPrimary>
            <ButtonPrimary variant="outlined" color="secondary" size="large" sx={{ px: 4, border: '1px solid rgba(255,255,255,0.3)' }} onClick={() => navigate('/programs')}>Take AI Test</ButtonPrimary>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/hero_students.jpg"
            alt="Students learning AI"
            sx={{ 
              width: '100%', 
              borderRadius: 4, 
              boxShadow: '0 10px 30px rgba(0,0,0,0.12)', 
              filter: 'drop-shadow(0 0 10px rgba(212,175,55,0.2))',
              transition: 'box-shadow 0.3s ease, filter 0.3s ease, transform 0.3s ease',
              '&:hover': {
                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                filter: 'drop-shadow(0 0 0px rgba(212,175,55,0))',
                transform: 'translateY(2px)'
              }
            }}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Hero;
