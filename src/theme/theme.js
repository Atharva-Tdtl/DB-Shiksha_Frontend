import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#D4AF37',
      light: '#F5D76E',
      dark: '#B8860B',
      contrastText: mode === 'dark' ? '#0D0D0D' : '#FFFFFF',
    },
    secondary: {
      main: mode === 'dark' ? '#FFFFFF' : '#0D0D0D',
      contrastText: mode === 'dark' ? '#0D0D0D' : '#FFFFFF',
    },
    background: {
      default: mode === 'dark' ? '#0D0D0D' : '#F5F5F5',
      paper: mode === 'dark' ? '#1A1A1A' : '#FFFFFF',
    },
    text: {
      primary: mode === 'dark' ? '#FFFFFF' : '#0D0D0D',
      secondary: mode === 'dark' ? '#B3B3B3' : '#666666',
    },
    divider: 'rgba(212, 175, 55, 0.2)',
  },
  typography: {
    fontFamily: "'Outfit', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '10px 24px',
          fontSize: '1rem',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #D4AF37 30%, #F5D76E 90%)',
          color: '#0D0D0D',
          boxShadow: '0 3px 15px rgba(212, 175, 55, 0.3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #F5D76E 30%, #D4AF37 90%)',
            boxShadow: '0 5px 20px rgba(212, 175, 55, 0.5)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: mode === 'dark' ? '1px solid rgba(212, 175, 55, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#D4AF37',
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          '&.Mui-selected': {
            color: '#D4AF37',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#D4AF37',
            },
          },
        },
      },
    },
  },
});
