import React, { useState } from 'react'
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './darktheme.css'
// import 'prismjs/themes/prism.css';
import { Box, Button, colors, Paper } from '@mui/material';
import Editor from 'react-simple-code-editor';

export const CodeBlock = (props) => {

    const [hover, setHover] = useState(false)
    const [buttonText, setButtonText] = useState('Copy')

    const copyText = () => {
        navigator.clipboard.writeText(props.children);
        setButtonText('Copied');
        setTimeout(() => setButtonText('Copy'), 500);
    }

    return (
        <Paper
            sx={{
                position: 'relative',
                maxHeight: '400px',
                boxSizing: 'content-box',
                borderRadius: '10px',
                boxShadow: `0 0 0px 1px rgba(144, 202, 249, 0.4)`,
                '&:hover': {
                    boxSizing: 'border-box',
                    boxShadow: `0 0 1px 4px rgb(144, 202, 249)`,
                },
                color: colors.grey[300],
                height: props.height,
                width: props.width || '100%',
            }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <Box overflow={'auto'} height={1} sx={{
                scrollbarWidth: '2px',
                bgcolor: 'rgb(0, 30, 60)',
                borderRadius: '10px',
            }}
            >
                <Editor
                    value={props.children}
                    highlight={code => highlight(code, languages.extend('javascript'), 'javascript')}
                    padding={10}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14,
                        spellcheck: 'false',
                        autocorrect: "off",
                        padding: '10px'
                    }}
                    readOnly={true}
                    disabled={true}

                />
                {
                    hover && (
                        <Box position={'absolute'} top={0} right={0} m={1} >
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'primary.main',
                                    borderColor: 'secondary.main',
                                    bgcolor: 'rgba(200, 200, 200, 0.2)',
                                    width: 'fit-content',
                                    fontSize: '12px',
                                    padding: '4px'
                                }}
                                onClick={copyText}
                            >
                                {buttonText}
                            </Button>
                        </Box>
                    )
                }
            </Box>
        </Paper>
    )
}
