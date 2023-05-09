import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeContextProvider } from '../context/TehemeContextProvider';
import { IconButton, Link, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { SideDrawer } from '../components/Drawers/SideDrawer';
import { SettingDrawer } from '../components/Drawers/SettingDrawer';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Outlet } from 'react-router-dom';
import { Screen } from '../components/Screens/Screen';

const drawerWidth = 240;

export const Root = () => {
    const [settingOpen, setSettingOpen] = useState(false)

    const classes = {
        icon: {
            borderRadius: '10px',
            border: '1px solid',
            color: 'primary.main',
        }
    };

    return (
        <React.StrictMode>
            <ThemeContextProvider>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`,
                            bgcolor: 'transparent',
                        }}
                    >
                        <Toolbar sx={{
                            bgcolor: 'background.paper',
                            borderBottom: '1px solid rgba(194, 224, 255, 0.08)',
                            backdropFilter: 'blur(8px)',
                        }}>
                            <Stack direction='row' width='100%'>
                                <Stack flexGrow={1} direction='row-reverse' spacing={2}>
                                    <IconButton
                                        sx={classes.icon}
                                        onClick={() => setSettingOpen(true)}
                                    >
                                        <SettingsIcon />
                                    </IconButton>
                                    <Link href="https://github.com/Satyam-2001" target={'_blank'} >
                                        <IconButton
                                            sx={classes.icon}
                                        >
                                            <GitHubIcon />
                                        </IconButton>
                                    </Link>
                                </Stack>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                    <SideDrawer />
                    <SettingDrawer open={settingOpen} onClose={() => setSettingOpen(false)} />
                    <Screen>
                        <Outlet />
                    </Screen>
                </Box>
            </ThemeContextProvider>
        </React.StrictMode>
    );
}
