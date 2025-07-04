import React, { createContext, useContext } from 'react';
import { lightTheme } from '../theme/theme';

const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children, theme = lightTheme }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
