import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useState } from 'react';
import type { PropsWithChildren } from 'react';
import { ThemeContext } from './themeContext';
import {MODE_LIGHT, MODE_DARK, type ThemeMode} from "../common/const.ts";

const AppThemeProvider = ({ children }: PropsWithChildren) => {
    const [mode, setMode] = useState<ThemeMode>(MODE_LIGHT);

    const toggleTheme = () => {
        setMode((prev: ThemeMode) => (prev === MODE_LIGHT ? MODE_DARK : MODE_LIGHT));
    };

    const theme = createTheme({
        palette: {
            mode,
            ...(mode === MODE_LIGHT
                ? {
                    primary: { main: '#ffffff' },
                    background: {
                        default: '#ffffff',
                        container: '#f9f9f9'
                    },
                    text: {
                        primary: '#000000',
                    },
                    icon: { default: '#000efe' },
                    custom: {
                        sidebar: '#ffffff',
                        hoverSidebar: '#ffffff',
                        border: '#EDEDED'
                    },
                }
                : {
                    primary: { main: '#90caf9' },
                    background: {
                        default: '#000000',
                        container: '#242424'
                    },
                    text: {
                        primary: '#ffffff',
                    },
                    icon: { default: '#ffffff' },
                    custom: {
                        sidebar: '#ffffff',
                        hoverSidebar: '#efefef',
                        border: '#242424'
                    }
                }),
        },
        components: {
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        '&.Mui-focused': {
                            color: 'green',
                        },
                    },
                },
            },
        },
    });

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default AppThemeProvider;
