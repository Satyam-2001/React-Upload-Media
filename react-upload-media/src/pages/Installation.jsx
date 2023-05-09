import { Divider, Typography } from '@mui/material'
import React from 'react'
import { CodeBlock } from '../components/CodeBlock/CodeBlock'

export const Installation = () => {
    return (
        <>
            <Typography component='h1' variant='h4' className="title" fontWeight={600} letterSpacing={'2px'}>Installation</Typography>
            <Typography component='p'>
                React Upload Media can install using npm install command.
            </Typography>
            <Divider />
            <Typography component='p'>
                Run the following command to install React Upload Media to your project.
            </Typography>
            <CodeBlock>npm install react-upload-media</CodeBlock>
        </>
    )
}
