import React, { useState, useRef } from 'react';
import { Container, Box, Snackbar, Alert, Paper, Typography, Button, Stack } from '@mui/material';
import HeroSection from '../components/onboarding/HeroSection';
import RoleSelection from '../components/onboarding/RoleSelection';
import SignupForm from '../components/onboarding/SignupForm';
import Outcomes from '../components/onboarding/Outcomes';
import PricingPreview from '../components/onboarding/PricingPreview';
import TrustSection from '../components/onboarding/TrustSection';
import CTASection from '../components/onboarding/CTASection';
import BoltIcon from '@mui/icons-material/Bolt';

const Dashboard = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  
  const signupRef = useRef(null);

  const scrollToSignup = () => {
    signupRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setSnackbar({
      open: true,
      message: `Great! You've selected the ${role.charAt(0).toUpperCase() + role.slice(1)} track.`,
      severity: 'success'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh', pt: 8 }}>
      <Container maxWidth="lg">
        {/* Role Selection (Tell us who you are) */}
        <RoleSelection selectedRole={selectedRole} onSelect={handleRoleSelect} />

        {/* Signup Form Section */}
        <Box ref={signupRef} sx={{ py: 8 }}>
          <SignupForm />
        </Box>

        {/* Outcomes Section */}
        <Outcomes />

        {/* AI Test Section (Section 5) */}
        <Box sx={{ py: 8 }}>
          <Paper 
            sx={{ 
              p: 6, 
              textAlign: 'center', 
              bgcolor: 'rgba(212, 175, 55, 0.05)', 
              border: '2px dashed #D4AF37',
              borderRadius: 4
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
              Not sure where to start?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
              Take our 5-minute AI assessment to find the perfect learning path for your career goals.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              startIcon={<BoltIcon />}
              sx={{ px: 5, py: 1.5, fontWeight: 700 }}
            >
              Take Free AI Test
            </Button>
          </Paper>
        </Box>

        {/* Pricing Preview */}
        <PricingPreview />


        {/* Trust Section */}
        <TrustSection />
      </Container>

      {value === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CardCourse title="Generative AI Masterclass" price="Completed" category="AI" level="Advanced" image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600" />
          </Grid>
          {/* More courses */}
        </Grid>
      )}


      {/* Final CTA */}
      <CTASection onGetStartedClick={scrollToSignup} />

      {/* Feedback Snackbar */}
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%', borderRadius: '8px' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Dashboard;

