import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const CustomSnackbar = ({ open, handleClose, message, severity = 'success' }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%', bgcolor: severity === 'success' ? '#1A1A1A' : undefined, color: severity === 'success' ? '#D4AF37' : undefined, border: severity === 'success' ? '1px solid #D4AF37' : undefined }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
