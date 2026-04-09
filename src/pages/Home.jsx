import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import Hero from './HomeSections/Hero';
import ProgramsPreview from './HomeSections/ProgramsPreview';
import LearningPath from './HomeSections/LearningPath';
import WhyChooseUs from './HomeSections/WhyChooseUs';
import Testimonials from './HomeSections/Testimonials';
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';
import StarsIcon from '@mui/icons-material/Stars';

const Home = () => {
  return (
    <Box>
      <Hero />
      
      {/* Trust Section */}
      <Box sx={{ bgcolor: '#1A1A1A', py: 4, textAlign: 'center', borderBottom: '1px solid rgba(212,175,55,0.1)' }}>
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
            <Box sx={{ position: 'relative', p: 2 }}>
              <Box sx={{ position: 'absolute', top: 0, right: 0, width: '90%', height: '90%', border: '2px solid #D4AF37', borderRadius: 4, zIndex: 0 }} />
              <Box component="img" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" sx={{ width: '100%', borderRadius: 4, position: 'relative', zIndex: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </SectionWrapper>

      <ProgramsPreview />
      
      <LearningPath />

      <WhyChooseUs />

      {/* AI Test Section */}
      <Box sx={{ py: 10, bgcolor: '#0D0D0D', textAlign: 'center', borderY: '1px solid rgba(212,175,55,0.1)' }}>
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
      <SectionWrapper id="corporate" bgcolor="#1A1A1A">
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
            <ButtonPrimary size="large">Partner With Us</ButtonPrimary>
          </Grid>
        </Grid>
      </SectionWrapper>

      {/* Final CTA */}
      <Box sx={{ py: 12, textAlign: 'center', background: 'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, rgba(13,13,13,1) 70%)' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ mb: 3, fontWeight: 800 }}>Join the AI Revolution</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 5, maxWidth: 600, mx: 'auto' }}>
            Start your journey today and gain the skills that are redefining the global job market.
          </Typography>
          <ButtonPrimary size="large" sx={{ py: 2, px: 8, fontSize: '1.25rem', boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}>Enroll Now</ButtonPrimary>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
