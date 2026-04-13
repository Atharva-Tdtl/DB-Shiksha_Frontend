import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CardCourse from '../../components/CardCourse';
import SectionWrapper from '../../components/SectionWrapper';
import { fetchCourses } from '../../services/courseService';
import Loader from '../../components/Loader';

const ProgramsPreview = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses(setLoading, (data) => {
      const transformedData = data.slice(0, 3).map(course => ({
        ...course,
        image: course.thumbnail || "https://images.unsplash.com/photo-1485083233855-313b198c97e2?w=800&auto=format&fit=crop",
        category: course.title.toLowerCase().includes("student") ? "AI for Students" : 
                  course.title.toLowerCase().includes("professional") ? "AI for Professionals" : 
                  course.title.toLowerCase().includes("business") || course.title.toLowerCase().includes("leader") ? "AI for Business Leaders" : 
                  course.title.toLowerCase().includes("advanced") || course.title.toLowerCase().includes("expert") ? "Advanced AI Programs" : "AI for Everyone",
        level: "Beginner",
        duration: "4 Weeks",
        price: course.price
      }));
      setCourses(transformedData);
    }, setError);
  }, []);

  if (loading) {
    return (
      <SectionWrapper title="Our Top Programs" subtitle="Choose from our most requested and highly-rated AI courses designed by industry experts.">
        <Loader type="skeleton" count={3} />
      </SectionWrapper>
    );
  }

  if (error || courses.length === 0) return null;

  return (
    <SectionWrapper title="Our Top Programs" subtitle="Choose from our most requested and highly-rated AI courses designed by industry experts.">
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={4} key={course.id || index}>
            <CardCourse {...course} />
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default ProgramsPreview;
