import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => useContext(ColorModeContext);

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(mode);
    
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'light');
    }
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newTheme = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return newTheme;
        });
      },
      mode
    }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
