import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Hero from './HomeSections/Hero';
import ProgramsPreview from './HomeSections/ProgramsPreview';
import LearningPath from './HomeSections/LearningPath';
import WhyChooseUs from './HomeSections/WhyChooseUs';
import Testimonials from './HomeSections/Testimonials';
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';
import StarsIcon from '@mui/icons-material/Stars';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Hero />
      
      {/* Trust Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 4, textAlign: 'center', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textTransform: 'uppercase', letterSpacing: 2 }}>
          Trusted by leading organizations worldwide
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ opacity: 0.6, px: 2 }}>
          {['Google', 'Microsoft', 'Nvidia', 'Meta', 'Amazon', 'Intel'].map((brand) => (
            <Grid item key={brand}>
              <Typography variant="h5" sx={{ fontWeight: 800, fontStyle: 'italic', letterSpacing: -1 }}>{brand}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* What is DBShiksha */}
      <SectionWrapper title="What is DBShiksha?">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Beyond Conventional <Box component="span" sx={{ color: '#D4AF37' }}>Learning</Box></Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
              DBShiksha is India's premier AI Learning Management System (LMS) designed specifically to bridge the gap between academic theory and industry reality.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
              Our platform offers a blend of live mentorship, interactive sandboxes, and globally recognized certifications that make you job-ready from day one.
            </Typography>
            <ButtonPrimary sx={{ mt: 2 }}>Learn More About Us</ButtonPrimary>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              width: '100%', 
              maxWidth: 500, 
              mx: 'auto', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              overflow: 'hidden',
              borderRadius: 5,
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)'
              }
            }}>
              <Box 
                component="img" 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                alt="education"
                sx={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block', 
                  objectFit: 'cover' 
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </SectionWrapper>

      <ProgramsPreview />
      
      <LearningPath />

      <WhyChooseUs />

      {/* AI Test Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default', textAlign: 'center', borderY: '1px solid rgba(212,175,55,0.1)' }}>
        <Container maxWidth="md">
          <StarsIcon sx={{ fontSize: 60, color: '#D4AF37', mb: 2 }} />
          <Typography variant="h3" sx={{ mb: 3 }}>Not sure where to start?</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 5 }}>
            Take our 5-minute AI Aptitude Test to find the perfect learning path for your career goals.
          </Typography>
          <ButtonPrimary size="large" variant="outlined" sx={{ px: 6, border: '2px solid #D4AF37' }}>Start AI Test Now</ButtonPrimary>
        </Container>
      </Box>

      <Testimonials />

      {/* Corporate Section */}
      <SectionWrapper id="corporate" bgcolor="background.paper">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
              alt="Corporate Training"
              sx={{ width: '100%', borderRadius: 4 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 2, fontWeight: 700 }}>B2B SOLUTIONS</Typography>
            <Typography variant="h3" sx={{ mt: 1, mb: 3 }}>AI Training for <Box component="span" sx={{ color: '#D4AF37' }}>Corporates</Box></Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
              Upskill your workforce with customized AI training programs tailored to your industry needs. From leadership workshops to deep technical dives.
            </Typography>
            <ButtonPrimary size="large" onClick={() => navigate('/contact')}>Partner With Us</ButtonPrimary>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Final CTA */}
      <Box sx={{ py: 12, textAlign: 'center', background: (theme) => `radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, ${theme.palette.background.default} 70%)` }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>Join the AI Revolution</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 5, maxWidth: 600, mx: 'auto' }}>
            Start your journey today and gain the skills that are redefining the global job market.
          </Typography>
          <ButtonPrimary size="large" sx={{ py: 2, px: 8, fontSize: '1.25rem', boxShadow: '0 0 30px rgba(212,175,55,0.4)' }} onClick={() => navigate('/programs')}>Enroll Now</ButtonPrimary>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
