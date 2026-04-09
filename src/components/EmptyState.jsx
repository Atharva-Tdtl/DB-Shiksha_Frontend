import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const EmptyState = ({ message = "No data available", icon }) => {
  return (
    <Box sx={{ textAlign: 'center', py: 10, opacity: 0.7 }}>
      {icon || <InfoOutlinedIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />}
      <Typography variant="h6">{message}</Typography>
    </Box>
  );
};

export default EmptyState;
