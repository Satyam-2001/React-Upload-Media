import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { FileIcon } from './FileIcon.js'
import { CreateIcon } from './CreateIcon.js';
import ColorContext from './ColorContext.js';

function ReadableFileSize(bytes) {

    if (Math.abs(bytes) < 1023) {
        return bytes + ' B';
    }

    const units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let u = -1;

    do {
        bytes /= 1024;
        ++u;
    } while (Math.round(Math.abs(bytes)) >= 1024 && u < units.length - 1);


    return bytes.toFixed(1) + ' ' + units[u];
}

export const FileStack = (props) => {

    const ref = useRef()
    const [height, setHeight] = useState(0)
    const [selectedFile, setSelectedFile] = useState(props?.files?.[0])
    const {buttonColor} = useContext(ColorContext)

    const removeFile = (file) => {
        if (file.name === selectedFile?.name) {
            const index = props.files.findIndex(file => file.name === selectedFile.name);
            const nextItem = (index + 1) % (props.files.length);
            setSelectedFile(props?.files?.[nextItem])
        }
        props.removeFile(file)
    }

    useLayoutEffect(() => {
        const height = ref.current.clientHeight;
        setHeight(height - 16);
    }, [])

    return (
        <Stack
            flexGrow={1}
            direction='column'
            spacing={2}
            height={props.height}
        >
            <Stack flexGrow={1} alignItems='center' height={'0%'}>
                <Typography
                    sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'auto',
                    }}
                    width={'80%'}
                    textAlign='center'
                >
                    {selectedFile.name}
                </Typography>
                <Grid
                    container
                    display={'flex'}
                    // sx={{ maxWidth: '80%', maxHeight: '60%', boxSizing: 'border-box' }}
                    flexGrow={1}
                    alignItems={'center'}
                    justifyContent={'center'}
                    direction='column'
                    ref={ref}
                >
                    <CreateIcon
                        file={selectedFile}
                        style={{ maxWidth: '80%', maxHeight: height, overflow: 'hidden', fontSize: height }}
                    />
                </Grid>
                <Typography>{ReadableFileSize(selectedFile.size)}</Typography>
            </Stack>
            <Stack direction='row' spacing={2} justifyContent='center' boxSizing={'border-box'}>
                <div
                    style={{
                        width: 'auto',
                        overflow: 'auto',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {props.files.map((file) => {
                        return (
                            <Box px={1} margin={'auto'} display='inline-block' key={file.name}>
                                <FileIcon
                                    key={file.name}
                                    file={file}
                                    onClick={() => setSelectedFile(file)}
                                    selected={file.name === selectedFile.name}
                                    onDelete={removeFile}
                                />
                            </Box>
                        )
                    })}
                </div>
                {props?.options?.multiple === true &&
                    (
                        <>
                            <input {...props.inputProp} />
                            <IconButton
                                sx={{
                                    border: '1px solid grey',
                                    borderRadius: '5px',
                                    height: '56px',
                                    width: '56px',
                                }}
                                pb={1}
                                onClick={() => document.getElementById(props.inputProp.id).click()}

                            >
                                <AddIcon />
                            </IconButton>
                        </>
                    )
                }

                <Button
                    variant='contained'
                    sx={{
                        height: '56px',
                        padding: '0 16px',
                        bgcolor: buttonColor,
                    }}
                    onClick={props.onSubmit ? props.onSubmit : (() => { })}
                >
                    Done
                </Button>
            </Stack>
        </Stack >

    )
}
