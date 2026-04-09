import React, { useState } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { 
  Grid, 
  Paper, 
  Typography, 
  Box, 
  Dialog, 
  DialogContent, 
  IconButton, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Stack, 
  Chip 
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ButtonPrimary from '../components/ButtonPrimary';

const Certifications = () => {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    { 
      title: 'Certified AI Professional (CAIP)', 
      industry: 'General AI', 
      students: '12,000+',
      description: 'The CAIP is our most popular entry-level certification, designed to validate a professional\'s foundational knowledge of artificial intelligence. It bridges the gap between conceptual understanding and practical business application.',
      modules: [
        'AI & Machine Learning Foundations',
        'Data Ethics and AI Governance',
        'Enterprise AI Strategy',
        'Practical Prompt Engineering'
      ],
      duration: '8 Weeks',
      benefit: 'Industry-recognized digital badge and physical certificate.',
      assessment: '120-minute proctored online exam.'
    },
    { 
      title: 'Generative AI Expert Certification', 
      industry: 'Creative Tech', 
      students: '5,000+',
      description: 'Master the next wave of AI technology. This certification focuses on Large Language Models (LLMs), Image Generation models, and the architectures behind tools like GPT-4 and Stable Diffusion.',
      modules: [
        'LLM Architectures & Fine-tuning',
        'Latent Diffusion Models',
        'Advanced Agentic Programming',
        'Multimodal AI Integration'
      ],
      duration: '12 Weeks',
      benefit: 'Portfolio of 5 high-end GenAI projects verified by experts.',
      assessment: 'Capstone project and technical interview.'
    },
    { 
      title: 'MLOps Architect Certification', 
      industry: 'Software Engineering', 
      students: '3,500+',
      description: 'Designed for engineers who want to specialize in the operationalization of machine learning models. Learn to build scalable, reliable, and automated ML pipelines.',
      modules: [
        'CI/CD for Machine Learning (GitOps)',
        'Scalable Infrastructure (Kubernetes/Kubeflow)',
        'Model Monitoring & Drift Detection',
        'Feature Stores & Data Versioning'
      ],
      duration: '10 Weeks',
      benefit: 'Direct placement assistance with partner tech firms.',
      assessment: 'Hands-on lab exam and architectural design review.'
    },
  ];

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SectionWrapper title="Industry-Standard Certifications" subtitle="Elevate your resume with certifications recognized by top tech companies worldwide.">
      <Grid container spacing={4}>
        {certs.map((cert, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ p: 4, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s', '&:hover': { transform: 'translateY(-10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } }}>
              <WorkspacePremiumIcon sx={{ fontSize: 60, color: '#D4AF37', mb: 2, mx: 'auto' }} />
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>{cert.title}</Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>Field: {cert.industry}</Typography>
              <Typography variant="body2" sx={{ mb: 3 }}>Joined by {cert.students} learners</Typography>
              <Box sx={{ mt: 'auto' }}>
                <ButtonPrimary 
                  variant="outlined" 
                  fullWidth 
                  sx={{ border: '1px solid #D4AF37' }}
                  onClick={() => handleOpen(cert)}
                >
                  Learn More
                </ButtonPrimary>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Certification Details Modal */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        maxWidth="md" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: 4, overflow: 'hidden' }
        }}
      >
        <Box sx={{ bgcolor: '#0D0D0D', color: 'white', py: 4, px: 3, position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{ position: 'absolute', right: 16, top: 16, color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
          <Stack direction="row" spacing={2} alignItems="center">
            <WorkspacePremiumIcon sx={{ fontSize: 50, color: '#D4AF37' }} />
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 800 }}>{selectedCert?.title}</Typography>
              <Typography variant="subtitle1" sx={{ color: '#D4AF37' }}>{selectedCert?.industry} Certification</Typography>
            </Box>
          </Stack>
        </Box>

        <DialogContent sx={{ p: 4, bgcolor: 'background.paper' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Program Overview</Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>
                {selectedCert?.description}
              </Typography>
              
              <Divider sx={{ my: 3 }} />
              
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>Key Modules</Typography>
              <List>
                {selectedCert?.modules.map((module, i) => (
                  <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon sx={{ color: '#D4AF37', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={module} />
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={5}>
              <Box sx={{ p: 3, bgcolor: 'rgba(212, 175, 55, 0.05)', borderRadius: 3, border: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#D4AF37' }}>Certification Details</Typography>
                
                <Stack spacing={2.5}>
                  <Box>
                    <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Duration</Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">{selectedCert?.duration}</Typography>
                  </Box>

                  <Box>
                    <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                      <MenuBookIcon fontSize="small" color="action" />
                      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Assessment</Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">{selectedCert?.assessment}</Typography>
                  </Box>

                  <Divider />

                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>Key Benefit</Typography>
                    <Chip 
                      label={selectedCert?.benefit} 
                      sx={{ 
                        height: 'auto', 
                        py: 1, 
                        '& .MuiChip-label': { whiteSpace: 'normal', fontSize: '0.8rem' },
                        bgcolor: 'rgba(212, 175, 55, 0.1)',
                        color: '#D4AF37',
                        border: '1px solid rgba(212, 175, 55, 0.2)'
                      }} 
                    />
                  </Box>
                </Stack>
                
                <ButtonPrimary fullWidth sx={{ mt: 4, py: 1.5 }}>Enroll for Exam</ButtonPrimary>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
};

export default Certifications;

