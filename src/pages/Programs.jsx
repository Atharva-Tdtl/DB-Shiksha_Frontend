import React, { useState, useEffect } from 'react';
import { Grid, Box, Tabs, Tab, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SectionWrapper from '../components/SectionWrapper';
import CardCourse from '../components/CardCourse';
import Loader from '../components/Loader';

const Programs = () => {
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const courses = [
    { title: 'AI for Business Leaders', price: '49,999', level: 'Intermediate', category: 'Corporate' },
    { title: 'Full Stack AI Developer', price: '89,999', level: 'Beginner to Pro', category: 'Development' },
    { title: 'Generative AI Masterclass', price: '29,999', level: 'Advanced', category: 'Creative' },
    { title: 'MLOps for Engineers', price: '59,999', level: 'Advanced', category: 'Development' },
    { title: 'Python for AI Beginners', price: '19,999', level: 'Beginner', category: 'Basics' },
    { title: 'Computer Vision Specialization', price: '69,999', level: 'Intermediate', category: 'Ai Specialization' },
  ];

  return (
    <SectionWrapper title="Our Programs" subtitle="Explore our wide range of industry-aligned AI courses and certifications.">
      <Box sx={{ mb: 6, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'center', justifyContent: 'space-between' }}>
        <Tabs 
          value={tab} 
          onChange={handleTabChange} 
          textColor="primary" 
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="All Programs" />
          <Tab label="For Students" />
          <Tab label="For Working Professionals" />
          <Tab label="Corporate Training" />
        </Tabs>
        
        <TextField
          placeholder="Search programs..."
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{ width: { xs: '100%', md: 300 } }}
        />
      </Box>

      {loading ? (
        <Loader type="skeleton" count={6} />
      ) : (
        <Grid container spacing={4}>
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardCourse {...course} />
            </Grid>
          ))}
        </Grid>
      )}
    </SectionWrapper>
  );
};

export default Programs;
