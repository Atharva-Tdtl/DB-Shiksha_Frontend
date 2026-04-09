import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import CardCourse from '../../components/CardCourse';
import SectionWrapper from '../../components/SectionWrapper';

const ProgramsPreview = () => {
  const courses = [
    { title: 'AI for Business Leaders', price: '49,999', level: 'Intermediate', category: 'Corporate' },
    { title: 'Full Stack AI Developer', price: '89,999', level: 'Beginner to Pro', category: 'Development' },
    { title: 'Generative AI Masterclass', price: '29,999', level: 'Advanced', category: 'Creative' },
  ];

  return (
    <SectionWrapper title="Our Top Programs" subtitle="Choose from our most requested and highly-rated AI courses designed by industry experts.">
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardCourse {...course} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ProgramsPreview;
