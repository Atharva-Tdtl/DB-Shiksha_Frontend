import React, { useState } from 'react';
import { 
  Box, TextField, Button, Stack, Typography, Grid, MenuItem, 
  CircularProgress, InputAdornment, IconButton 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Swal from 'sweetalert2';
import { registerUser } from '../../services/authService';

const SignupForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    gender: 'M',
    education: '',
    password: '',
    password2: ''
  });
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.full_name) tempErrors.full_name = "Full Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Enter a valid 10-digit number";
    if (!formData.address) tempErrors.address = "Address is required";
    if (!formData.education) tempErrors.education = "Education status is required";
    if (!formData.password) tempErrors.password = "Password is required";
    if (formData.password !== formData.password2) tempErrors.password2 = "Passwords do not match";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const result = await registerUser(formData, setLoading);
      
      // Success Handling
      Swal.fire({
        title: 'Registration Successful! 🚀',
        html: `
          <div style="color: #B3B3B3; margin-bottom: 20px;">
            ${result.message || 'OTP has been sent to your email.'}
          </div>
          <div style="font-size: 1.1rem; color: #D4AF37; font-weight: 700;">
            Redirecting to Home in <b id="countdown">3</b> seconds...
          </div>
        `,
        timer: 3000,
        timerProgressBar: true,
        background: '#1A1A1A',
        color: '#FFFFFF',
        confirmButtonColor: '#D4AF37',
        didOpen: () => {
          const content = Swal.getHtmlContainer();
          const countdown = content.querySelector('#countdown');
          let timerInterval = setInterval(() => {
            const timeLeft = Math.ceil(Swal.getTimerLeft() / 1000);
            if (countdown) countdown.textContent = timeLeft;
          }, 100);
          Swal.getPopup().addEventListener('mouseleave', () => {
            clearInterval(timerInterval);
          });
        },
        willClose: () => {
          navigate('/');
        }
      });

    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Something went wrong. Please try again.';
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: errorMsg,
        background: '#1A1A1A',
        color: '#FFFFFF',
        confirmButtonColor: '#D4AF37'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ 
        p: { xs: 3, md: 5 }, 
        bgcolor: 'background.paper', 
        borderRadius: '16px', 
        border: '1px solid rgba(212, 175, 55, 0.2)',
        maxWidth: '800px',
        mx: 'auto',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}
    >
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 800, textAlign: 'center', color: '#D4AF37' }}>
        Complete Your Registration
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center', color: 'text.secondary' }}>
        Join the elite community of AI-driven professionals
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Full Name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            error={!!errors.full_name}
            helperText={errors.full_name}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
            helperText={errors.phone}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          >
            <MenuItem value="M">Male</MenuItem>
            <MenuItem value="F">Female</MenuItem>
            <MenuItem value="O">Other</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Current Education"
            name="education"
            placeholder="e.g. Graduate, Student, Professional"
            value={formData.education}
            onChange={handleChange}
            error={!!errors.education}
            helperText={errors.education}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Full Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={!!errors.address}
            helperText={errors.address}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Create Password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Confirm Password"
            name="password2"
            type={showPassword ? 'text' : 'password'}
            value={formData.password2}
            onChange={handleChange}
            error={!!errors.password2}
            helperText={errors.password2}
            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            disabled={loading}
            sx={{ 
              py: 2, 
              fontSize: '1.2rem', 
              fontWeight: 800,
              borderRadius: '8px',
              background: 'linear-gradient(45deg, #D4AF37 30%, #F5D76E 90%)',
              color: '#000',
              mt: 2,
              '&:hover': { 
                background: 'linear-gradient(45deg, #F5D76E 30%, #D4AF37 90%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)'
              }
            }}
          >
            {loading ? <CircularProgress size={28} sx={{ color: '#000' }} /> : 'Register Now'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignupForm;

