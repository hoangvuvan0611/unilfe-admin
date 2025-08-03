import { createContext, useContext } from 'react';

export const ThemeContext = createContext<{ mode: string; toggleTheme: () => void } | undefined>(undefined);

export const useThemeContext = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useThemeContext must be used inside ThemeProvider');
    return ctx;
};
