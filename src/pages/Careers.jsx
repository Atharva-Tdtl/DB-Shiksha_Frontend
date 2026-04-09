import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';
import WorkIcon from '@mui/icons-material/Work';

const Careers = () => {
  const jobs = [
    { title: 'AI Curriculum Developer', type: 'Full-time', location: 'Remote' },
    { title: 'Full Stack Developer', type: 'Full-time', location: 'Pune/Hybrid' },
    { title: 'Student Success Manager', type: 'Contract', location: 'Remote' },
    { title: 'AI Research Intern', type: 'Internship', location: 'Remote' }
  ];

  return (
    <Box>
      <SectionWrapper title="Work at DBShiksha" subtitle="Join us in our mission to revolutionize AI education in India.">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 700, textAlign: 'center' }}>Current <Box component="span" sx={{ color: '#D4AF37' }}>Openings</Box></Typography>
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ bgcolor: '#1A1A1A', border: '1px solid rgba(212,175,55,0.1)', borderRadius: 2 }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WorkIcon sx={{ color: '#D4AF37', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>{job.title}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 1.5, py: 0.5, borderRadius: 1 }}>{job.type}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 1.5, py: 0.5, borderRadius: 1 }}>{job.location}</Typography>
                  </Box>
                  <ButtonPrimary variant="outlined" size="small">Apply Now</ButtonPrimary>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      <SectionWrapper bgcolor="#1A1A1A" title="Why Work With Us?">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box component="img" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" sx={{ width: '100%', borderRadius: 4 }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 700 }}>Our <Box component="span" sx={{ color: '#D4AF37' }}>Culture</Box></Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
              We are a team of passionate educators, techies, and creatives who believe in the power of AI to transform lives.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem' }}>
              We offer a flexible work environment, competitive compensation, and the opportunity to work at the intersection of AI and EdTech.
            </Typography>
          </Grid>
        </Grid>
      </SectionWrapper>
    </Box>
  );
};

export default Careers;
