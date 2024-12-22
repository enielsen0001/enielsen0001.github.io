import React, { createContext, useContext, useState } from 'react';

// Define the context type
interface AppContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

// Define ThemeType
type ThemeType = 'light' | 'dark';

// Create the context with a default value (important for TypeScript)
const AppContext = createContext<AppContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {}, // Dummy function
  theme: 'light',
  setTheme: () => {}, // Dummy function
});

// Create a custom hook for easy access to the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

// Create the context provider component
const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeType>('light');

  const value: AppContextType = {
    isMenuOpen,
    setIsMenuOpen,
    theme,
    setTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;