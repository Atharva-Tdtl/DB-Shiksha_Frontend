import React from 'react';
import { Grid } from '@mui/material';
import CardCourse from '../../components/CardCourse';
import SectionWrapper from '../../components/SectionWrapper';
import coursesData from '../../data/courses.json';

const ProgramsPreview = () => {
  const topCourses = coursesData.courses.slice(0, 3);

  return (
    <SectionWrapper title="Our Top Programs" subtitle="Choose from our most requested and highly-rated AI courses designed by industry experts.">
      <Grid container spacing={4}>
        {topCourses.map((course, index) => (
          <Grid item xs={12} md={4} key={course.id || index}>
            <CardCourse {...course} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ProgramsPreview;
