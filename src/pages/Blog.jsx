import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import SectionWrapper from '../components/SectionWrapper';
import ButtonPrimary from '../components/ButtonPrimary';

const Blog = () => {
  const blogs = [
    {
      title: 'The Future of Generative AI in Education',
      date: 'April 5, 2026',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
      excerpt: 'How large language models are transforming the way we design and deliver educational content.'
    },
    {
      title: 'Bridging the Industry-Academia Gap with AI',
      date: 'March 28, 2026',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000',
      excerpt: 'Why traditional curriculum is failing and how industry-aligned AI programs are the solution.'
    },
    {
      title: 'Top 5 AI Skills to Learn in 2024',
      date: 'March 15, 2026',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
      excerpt: 'From prompt engineering to internal AI governance, these are the skills recruiters are looking for.'
    }
  ];

  return (
    <Box>
      <SectionWrapper title="DBShiksha Blog" subtitle="Insights and updates from the world of AI and EdTech.">
        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', bgcolor: '#1A1A1A', border: '1px solid rgba(212,175,55,0.1)', borderRadius: 2, display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="caption" color="primary" sx={{ fontWeight: 700 }}>{blog.date}</Typography>
                  <Typography variant="h5" sx={{ mt: 1, mb: 2, fontWeight: 700, lineHeight: 1.3 }}>{blog.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{blog.excerpt}</Typography>
                  <ButtonPrimary variant="text" sx={{ p: 0, '&:hover': { background: 'transparent', textDecoration: 'underline' } }}>Read More</ButtonPrimary>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </SectionWrapper>
    </Box>
  );
};

export default Blog;
