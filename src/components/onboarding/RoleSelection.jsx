import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const roles = [
  { id: 'student', title: 'Student', icon: <SchoolIcon sx={{ fontSize: 40 }} />, desc: 'Looking to start a career in AI' },
  { id: 'professional', title: 'Professional', icon: <WorkIcon sx={{ fontSize: 40 }} />, desc: 'Upskilling for the modern workforce' },
  { id: 'leader', title: 'Business Leader', icon: <BusinessCenterIcon sx={{ fontSize: 40 }} />, desc: 'Transforming business with AI strategy' },
];

const RoleSelection = ({ selectedRole, onSelect }) => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, fontWeight: 700 }}>
        Tell us who you are
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {roles.map((role) => (
          <Grid item xs={12} sm={6} md={4} key={role.id}>
            <Card 
              onClick={() => onSelect(role.id)}
              sx={{ 
                cursor: 'pointer',
                textAlign: 'center',
                py: 4,
                bgcolor: selectedRole === role.id ? 'rgba(212, 175, 55, 0.1)' : 'background.paper',
                border: '2px solid',
                borderColor: selectedRole === role.id ? '#D4AF37' : 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  borderColor: '#D4AF37',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)'
                }
              }}
            >
              <CardContent>
                <Box sx={{ color: '#D4AF37', mb: 2 }}>
                  {role.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                  {role.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {role.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RoleSelection;
