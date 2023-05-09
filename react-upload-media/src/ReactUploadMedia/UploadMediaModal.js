import React from 'react'
import {IconButton, Stack } from '@mui/material'
import { StyledModal } from './StyledModal'
import CloseIcon from '@mui/icons-material/Close';
import './upload_media.css'
import { UploadMedia } from './UploadMedia.js';

export const UploadMediaModal = (props) => {

    const {primaryColor, secondaryColor} = props;

    return (
        <StyledModal open={props.open} onClose={props.onClose} width='600px' height='400px' color={primaryColor}>
            <Stack direction='column' width={'100%'} height={'100%'}>
                <Stack direction='row-reverse'>
                    <IconButton onClick={props.onClose}
                        sx={{
                            '&:hover': {
                                color: secondaryColor
                            }
                        }}>
                        <CloseIcon />
                    </IconButton>
                </Stack> 
                <UploadMedia {...props}/>
            </Stack>
        </StyledModal>
    )
}