import { ThemeProvider } from "@emotion/react";
import React, { createContext, useEffect, useState } from "react";
import { colors, createTheme } from "@mui/material";
import { useThemeDetector } from "../hooks/useThemeDetcetor";

const ThemeContext = createContext({
    theme: '',
    mode: 'system',
    setMode: (value) => { },
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: 'rgb(144, 202, 249)',
            dark: '#66B2FF',
            contrastText: 'rgb(10, 25, 41)',
        },
        secondary: {
            main: 'rgb(30, 72, 123)',
            dark: '#66B2FF',
        },
        background: {
            default: 'rgb(10, 25, 41)',
            paper: 'rgba(12, 28, 47, 0.5)',
        },
        border: {
            default: '1px solid rgba(194, 224, 255, 0.1)',
        },
        text: {
            primary: colors.grey[300],
            secondary: colors.grey[500],
        }
    },
    typography: {
        allVariants: {
            color: 'white'
        },
        body1: {
            fontSize: '1.1rem',
            color: '#B2BAC2',
            fontFamily: `"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        }
    }
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgb(26, 163, 255)',
            dark: 'rgb(0, 115, 230)',
            contrastText: 'white',
        },
        secondary: {
            main: 'rgb(102, 178, 255)',
            dark: 'rgb(0, 115, 230)',
        },
        background: {
            default: '#fff',
            paper: 'rgba(242, 242, 242, 0.5)',
        },
        border: {
            default: '1px solid rgba(10, 10, 10, 0.1)',
        },
        text: {
            primary: colors.grey[800],
            secondary: colors.grey[500],
        }
    },
    typography: {
        allVariants: {
            color: 'black'
        },
        body1: {
            fontSize: '1.1rem',
            color: 'rgb(89, 89, 89)',
            fontFamily: `"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
        }
    }
});

export const ThemeContextProvider = (props) => {

    const [mode, setMode] = useState('system');
    let theme = lightTheme;
    const system_mode = useThemeDetector();
    if(mode === 'dark' || (mode === 'system' && system_mode === 'dark')) {
        theme = darkTheme;
    }
    useEffect(() => {
        const storedMode = localStorage.getItem('mode');
        if (storedMode) {
            setMode(storedMode);
        }
    }, [])

    const setModeColor = (value) => {
        localStorage.setItem('mode', value);
        setMode(value);
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                mode,
                setMode: setModeColor,
            }}
        >
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export default ThemeContext;