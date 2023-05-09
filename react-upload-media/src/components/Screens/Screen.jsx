import { Toolbar } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export const Screen = (props) => {
    return (
        <Stack flexGrow={1} p={4} spacing={2} alignItems={'center'} width={'80%'}>
            <Stack
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', width: '100%' }}
                spacing={2}
            >
                <Toolbar />
                {props.children}
            </Stack>
        </Stack>
    )
}
