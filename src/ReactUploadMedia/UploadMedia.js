import React from 'react'
import { Stack } from '@mui/material'
import { useDropZone } from './useDropZone.js';
import { FileStack } from './FileStack';
import './upload_media.css'
import ColorContext from './ColorContext.js';

export const UploadMedia = (props) => {

    const { primaryColor, secondaryColor, buttonColor } = props;
    const { isDragActive, files, rootProps, inputProps, removeFile } = useDropZone(props.options)


    const submitHandler = () => {
        props?.onSubmit?.(files);
    }

    const isFileExist = Boolean(files.length > 0);

    return (
        <ColorContext.Provider value={{primaryColor: primaryColor || '#fff', secondaryColor: secondaryColor || 'rgb(0, 115, 230)', buttonColor: buttonColor || 'rgb(37, 156, 242)'}}>
            <Stack direction='column' width={'100%'} height={props.height ? props.height : '100%'} bgcolor={primaryColor || '#0073e6'} >
                {
                    !isFileExist && (
                        <Stack
                            {...rootProps}
                            sx={{
                                border: '3px dashed grey',
                                borderRadius: '5px',
                                boxSizing: 'border-box',
                                '&:hover': {
                                    backgroundColor: 'rgba(200, 200, 200, 0.3)',
                                    borderColor: secondaryColor,
                                    cursor: 'pointer',
                                    color: secondaryColor,
                                },
                            }}
                            p={2}
                            m={2}
                            flexGrow={1}
                            display='flex'
                            justifyContent='center'
                            alignItems='center'
                        // height='100%'
                        ><input style={{ display: 'none' }} {...inputProps} />
                            {
                                isDragActive ?
                                    <p>Drop the files here ...</p> :
                                    <p>Upload a file...</p>
                            }
                        </Stack>
                    )
                }
                {
                    isFileExist && (
                        <FileStack onSubmit={submitHandler} files={files} removeFile={removeFile} inputProp={inputProps} options={props.options} />
                    )
                }
            </Stack>
        </ColorContext.Provider>
    )
}