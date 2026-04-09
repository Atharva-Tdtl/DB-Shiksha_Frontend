import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress, Avatar, Tabs, Tab } from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';
import CardCourse from '../components/CardCourse';

const Dashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    enrolledCourses: 3,
    completedCourses: 1
  };

  return (
    <SectionWrapper>
      <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 3 }}>
        <Avatar sx={{ width: 80, height: 80, bgcolor: '#D4AF37', fontSize: '2rem' }}>JD</Avatar>
        <Box>
          <Typography variant="h4">{user.name}</Typography>
          <Typography variant="body1" color="text.secondary">{user.email}</Typography>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">Total Courses</Typography>
            <Typography variant="h3" sx={{ color: '#D4AF37' }}>{user.enrolledCourses}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">Completed</Typography>
            <Typography variant="h3" sx={{ color: '#D4AF37' }}>{user.completedCourses}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">Certificates</Typography>
            <Typography variant="h3" sx={{ color: '#D4AF37' }}>1</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary">
          <Tab label="My Courses" />
          <Tab label="Progress" />
          <Tab label="Certificates" />
        </Tabs>
      </Box>

      {value === 0 && (
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CardCourse title="Generative AI Masterclass" price="Completed" category="AI" level="Advanced" />
          </Grid>
          {/* More courses */}
        </Grid>
      )}

      {value === 1 && (
        <Box>
          <Typography variant="h6" sx={{ mb: 2 }}>Current Course: Full Stack AI Developer</Typography>
          <LinearProgress variant="determinate" value={45} sx={{ height: 10, borderRadius: 5, mb: 1 }} />
          <Typography variant="body2" color="text.secondary" align="right">45% Completed</Typography>
        </Box>
      )}

      {value === 2 && (
        <Box sx={{ p: 4, border: '2px dashed rgba(212,175,55,0.3)', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h6">AI Foundations Certificate</Typography>
          <Typography variant="body2" sx={{ mt: 1, color: '#D4AF37' }}>View / Download PDF</Typography>
        </Box>
      )}
    </SectionWrapper>
  );
};

export default Dashboard;
