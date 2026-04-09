import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SectionWrapper from '../../components/SectionWrapper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const reasons = [
  'Curriculum designed by Google & Microsoft experts',
  '1-on-1 Mentorship from Industry Leaders',
  'Dedicated Placement Support',
  'Access to Live AI Sandboxes & GPUs',
  'Life-time Access to Course Community',
  'Global Industry-Recognized Certifications'
];

const WhyChooseUs = () => {
  return (
    <SectionWrapper bgcolor="#1A1A1A" title="Why Choose DBShiksha" subtitle="We don't just teach AI; we build careers that define the future.">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000"
            alt="AI Lab"
            sx={{ width: '100%', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {reasons.map((reason, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box sx={{ display: 'flex', gap: 1.5, mb: 1 }}>
                  <CheckCircleIcon sx={{ color: '#D4AF37' }} />
                  <Typography variant="body1">{reason}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
