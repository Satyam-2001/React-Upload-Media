import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


export const StyledModal = (props) => {

    const { color } = props

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: color,
        borderRadius: '15px',
        boxShadow: 24,
        p: 1,
    };

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={style}
                width={props.width !== undefined ? props.width : 'auto'}
                height={props.height !== undefined ? props.height : 'auto'}
            >
                {props.children}
            </Box>
        </Modal>
    )
}
