import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import SectionWrapper from '../../components/SectionWrapper';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const steps = [
  { icon: <AutoFixHighIcon fontSize="large" />, title: 'AI Discovery', desc: 'Identify your AI potential with our specialized AI Test.' },
  { icon: <SchoolIcon fontSize="large" />, title: 'Deep Learning', desc: 'Master core concepts through hands-on project-based curriculum.' },
  { icon: <WorkspacePremiumIcon fontSize="large" />, title: 'Certification', desc: 'Earn industry-recognized badges and professional certificates.' },
  { icon: <TrendingUpIcon fontSize="large" />, title: 'Career Growth', desc: 'Get placement assistance and transition into top AI roles.' }
];

const LearningPath = () => {
  return (
    <SectionWrapper title="Your Learning Path" subtitle="A structured approach to transforming you into an AI expert.">
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper sx={{ p: 4, height: '100%', textAlign: 'center', transition: '0.3s', '&:hover': { borderColor: '#D4AF37', transform: 'translateY(-5px)' } }}>
              <Box sx={{ color: '#D4AF37', mb: 2 }}>{step.icon}</Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{step.title}</Typography>
              <Typography variant="body2" color="text.secondary">{step.desc}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default LearningPath;
