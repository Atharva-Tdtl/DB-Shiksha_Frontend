import React from 'react';
import { Box, Typography, Avatar, Grid, Paper, Rating } from '@mui/material';
import SectionWrapper from '../../components/SectionWrapper';

const reviews = [
  { name: 'Arjun Mehta', role: 'Software Engineer', text: 'DBShiksha transformed my understanding of LLMs. The hands-on labs were incredible.', avatar: 'A' },
  { name: 'Sarah Khan', role: 'Data Scientist', text: 'The Generative AI course is the best I have ever taken. Worth every penny of the investment.', avatar: 'S' },
  { name: 'Vikram Singh', role: 'Product Manager', text: 'Highly recommend the Corporate Training program for teams looking to stay ahead in 2024.', avatar: 'V' }
];

const Testimonials = () => {
  return (
    <SectionWrapper title="Success Stories" subtitle="Join 50,000+ students who have revolutionized their careers with our AI programs.">
      <Grid container spacing={4}>
        {reviews.map((rev, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 4, height: '100%', bgcolor: '#1A1A1A' }}>
              <Rating value={5} readOnly size="small" sx={{ mb: 2, color: '#D4AF37' }} />
              <Typography variant="body1" sx={{ mb: 3, fontStyle: 'italic', color: 'text.secondary' }}>"{rev.text}"</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar sx={{ bgcolor: '#D4AF37', fontWeight: 700 }}>{rev.avatar}</Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{rev.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{rev.role}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Testimonials;
