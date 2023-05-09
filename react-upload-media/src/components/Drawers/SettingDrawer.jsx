import Close from '@mui/icons-material/Close'
import { Box, Divider, Drawer, IconButton, Link, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import React, { useContext } from 'react'
import ThemeContext from '../../context/TehemeContextProvider'

export const SettingDrawer = (props) => {

    const { mode, setMode } = useContext(ThemeContext)

    return (
        <Drawer
            open={props.open}
            onClose={props.onClose}
            anchor={'right'}
        >
            <Stack
                width='350px'
                height='100%'
                sx={{
                    bgcolor: 'background.default'
                }}
                alignItems='center'
            >
                <Box flexGrow={1} width='100%'>
                    <Stack
                        direction={'row'}
                        justifyContent='space-between'
                        alignItems={'center'}
                        p={2}
                        width='100%'
                    >
                        <Typography component='h3' variant='h6'>Settings</Typography>
                        <IconButton
                            onClick={props.onClose}
                            sx={{
                                '&:hover': {
                                    color: 'secondary.dark'
                                }
                            }}>
                            <Close />
                        </IconButton>
                    </Stack>
                    <Divider />
                    <Stack
                        p={2}
                        direction='column'
                        spacing={2}
                        width='100%'
                    >
                        <Typography variant={'p'}>Mode</Typography>
                        <ToggleButtonGroup
                            color="primary"
                            value={mode}
                            exclusive
                            onChange={(e, _mode) => setMode(_mode)}
                            aria-label="Theme"
                            fullWidth
                        >
                            <ToggleButton value="light" >Light</ToggleButton>
                            <ToggleButton value="system">System</ToggleButton>
                            <ToggleButton value="dark">Dark</ToggleButton>
                        </ToggleButtonGroup>
                    </Stack>
                </Box>
                <Typography m={2} fontWeight={500}>Developed By <Link href='https://www.linkedin.com/in/satyam-lohiya-536879229/' underline='hover' target='_blank'>Satyam Lohiya🎉</Link></Typography>
            </Stack>
        </Drawer>
    )
}
