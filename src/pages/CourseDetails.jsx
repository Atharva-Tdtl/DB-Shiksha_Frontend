import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';
import Loader from '../components/Loader';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loader type="circular" />;

  const course = {
    title: 'Full Stack AI Developer',
    description: 'Master the art of building and deploying end-to-end AI applications using the latest industry tools and frameworks.',
    price: '89,999',
    outcomes: [
      'Build Generative AI applications',
      'Deploy models at scale with MLOps',
      'Master Deep Learning and Computer Vision',
      'Learn NLP and LLM integration'
    ],
    curriculum: [
      { section: 'Module 1: AI Foundations', topics: ['Linear Algebra', 'Python for AI', 'Statistical Analysis'] },
      { section: 'Module 2: Machine Learning Mastery', topics: ['Supervised Learning', 'Unsupervised Learning', 'Deep Dive into Scikit-learn'] },
      { section: 'Module 3: Neural Networks & Deep Learning', topics: ['TensorFlow & PyTorch', 'CNNs', 'RNNs & LSTMs'] },
      { section: 'Module 4: Generative AI & LLMs', topics: ['Transformer Architecture', 'Prompt Engineering', 'LangChain Framework'] }
    ]
  };

  return (
    <Box>
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 600 }}>Enrollment Open</Typography>
              <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>{course.title}</Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>{course.description}</Typography>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <Typography variant="h4" color="primary">₹{course.price}</Typography>
                <ButtonPrimary size="large" onClick={() => navigate('/checkout')}>Enroll Now</ButtonPrimary>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box component="img" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" sx={{ width: '100%', borderRadius: 4 }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <SectionWrapper title="What You Will Learn">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <List>
              {course.outcomes.map((outcome, index) => (
                <ListItem key={index}>
                  <ListItemIcon><CheckCircleOutlineIcon color="primary" /></ListItemIcon>
                  <ListItemText primary={outcome} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 3 }}>Curriculum Overview</Typography>
            {course.curriculum.map((module, index) => (
              <Accordion key={index} sx={{ mb: 1, bgcolor: 'background.paper' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                  <Typography sx={{ fontWeight: 600 }}>{module.section}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List size="small">
                    {module.topics.map((topic, i) => (
                      <ListItem key={i}><ListItemText secondary={topic} /></ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </SectionWrapper>

      <SectionWrapper title="Tools You Will Master" bgcolor="background.paper">
        <Grid container spacing={3} justifyContent="center">
          {['Python', 'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'HuggingFace'].map((tool) => (
            <Grid item key={tool} xs={6} sm={4} md={2} textAlign="center">
              <Paper sx={{ p: 2, bgcolor: 'background.default', border: '1px solid rgba(212,175,55,0.2)' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{tool}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      <SectionWrapper title="Common Questions">
        <Grid container spacing={2} sx={{ maxWidth: 800, mx: 'auto' }}>
          {[
            { q: 'Is this course suitable for beginners?', a: 'Yes, we start from foundations and move to advanced topics.' },
            { q: 'Will I get a certificate?', a: 'Absolutely. You will receive an industry-recognized DBShiksha certificate.' },
            { q: 'Are there any prerequisites?', a: 'Basic understanding of programming is helpful but not mandatory.' }
          ].map((pair, index) => (
            <Grid item xs={12} key={index}>
              <Accordion sx={{ bgcolor: 'background.paper' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
                  <Typography sx={{ fontWeight: 600 }}>{pair.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{pair.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>

      <Box sx={{ py: 8, textAlign: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Accelerate Your AI Career Now</Typography>
        <ButtonPrimary size="large" onClick={() => navigate('/checkout')}>Enroll in {course.title}</ButtonPrimary>
      </Box>
    </Box>
  );
};

export default CourseDetails;
