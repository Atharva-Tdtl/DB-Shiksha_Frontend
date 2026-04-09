import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, Divider, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';
import { showSuccess, showConfirm } from '../utils/swal';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    const result = await showConfirm('Confirm Enrollment', 'Proceed to pay ₹49,999 for AI for Business Leaders?');
    if (result.isConfirmed) {
      setLoading(true);
      // Simulate Payment
      setTimeout(() => {
        setLoading(false);
        showSuccess('Payment Successful!', 'You have been enrolled in the course.')
          .then(() => navigate('/dashboard'));
      }, 2000);
    }
  };

  return (
    <SectionWrapper title="Checkout">
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Billing Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="First Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Last Name" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Email Address" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Phone Number" variant="outlined" />
              </Grid>
            </Grid>
          </Paper>

          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Payment Method</Typography>
            <FormControl>
              <RadioGroup defaultValue="upi">
                <FormControlLabel value="upi" control={<Radio />} label="UPI (Google Pay, PhonePe)" />
                <FormControlLabel value="card" control={<Radio />} label="Credit / Debit Card" />
                <FormControlLabel value="netbanking" control={<Radio />} label="Net Banking" />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>

        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 4, position: 'sticky', top: 100 }}>
            <Typography variant="h6" sx={{ mb: 3 }}>Order Summary</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography color="text.secondary">Course Name</Typography>
              <Typography sx={{ fontWeight: 600 }}>AI for Business Leaders</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography color="text.secondary">Price</Typography>
              <Typography>₹49,999</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography color="text.secondary">GST (18%)</Typography>
              <Typography>₹9,000</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
              <Typography variant="h6">Total</Typography>
              <Typography variant="h6" color="primary">₹58,999</Typography>
            </Box>
            <ButtonPrimary 
              fullWidth 
              size="large" 
              onClick={handleEnroll}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Complete Enrollment'}
            </ButtonPrimary>
          </Paper>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default Checkout;
