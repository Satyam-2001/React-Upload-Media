import React, { useContext, useState } from 'react'
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CreateIcon } from './CreateIcon.js';
import ColorContext from './ColorContext.js';

const iconStyle = {
    borderRadius: '5px',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
};

export const FileIcon = (props) => {

    const { primaryColor, secondaryColor } = useContext(ColorContext)
    const [hover, setHover] = useState(false)
    let isActive = true;

    return (
        <div
            style={{ position: 'relative', overflow: 'hidden' }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <Box
                sx={{
                    border: props.selected ? '2px solid' : '1px solid rgba(100, 100, 100, 0.4)',
                    borderColor: props.selected ? secondaryColor : 'grey',
                    borderRadius: '5px',
                    height: '56px',
                    width: '56px',
                }}
                onClick={props.onClick}
            >
                <CreateIcon file={props.file} style={iconStyle} />
            </Box >
            {
                hover && (
                    <div style={{ position: 'absolute', zIndex: '9000', top: 0, right: 0, cursor: 'pointer' }}>
                        <CloseIcon
                            sx={{ zIndex: '5000', cursor: 'pointer', bgcolor: secondaryColor, borderRadius: '50%' }}
                            fontSize={'5px'}
                            margin={'4px'}
                            pading={'4px'}
                            onClick={() => {
                                props.onDelete(props.file)
                            }}
                        />
                    </div>
                )
            }
        </div>

    )
}