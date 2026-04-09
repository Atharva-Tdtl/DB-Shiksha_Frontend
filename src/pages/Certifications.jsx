import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Grid, Paper, Typography, Box } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ButtonPrimary from '../components/ButtonPrimary';

const Certifications = () => {
  const certs = [
    { title: 'Certified AI Professional (CAIP)', industry: 'General AI', students: '12,000+' },
    { title: 'Generative AI Expert Certification', industry: 'Creative Tech', students: '5,000+' },
    { title: 'MLOps Architect Certification', industry: 'Software Engineering', students: '3,500+' },
  ];

  return (
    <SectionWrapper title="Industry-Standard Certifications" subtitle="Elevate your resume with certifications recognized by top tech companies worldwide.">
      <Grid container spacing={4}>
        {certs.map((cert, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <WorkspacePremiumIcon sx={{ fontSize: 60, color: '#D4AF37', mb: 2, mx: 'auto' }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>{cert.title}</Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>Field: {cert.industry}</Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>Joined by {cert.students} learners</Typography>
              <Box sx={{ mt: 'auto' }}>
                <ButtonPrimary variant="outlined" fullWidth sx={{ border: '1px solid #D4AF37' }}>Learn More</ButtonPrimary>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Certifications;
