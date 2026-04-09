import React from 'react';
import { Box, CircularProgress, Skeleton, Grid } from '@mui/material';

const Loader = ({ type = 'circular', count = 3 }) => {
  if (type === 'skeleton') {
    return (
      <Grid container spacing={3}>
        {[...Array(count)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 1 }} />
            <Skeleton width="60%" />
            <Skeleton width="40%" />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 10 }}>
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;
