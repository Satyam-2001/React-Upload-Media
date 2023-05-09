import React, { useEffect, useRef } from 'react'
import { IconButton } from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const ImageIcon = ({ file, style }) => {

    const imageRef = useRef();
    useEffect(() => {
        imageRef.current.src = URL.createObjectURL(file);
    }, [file])

    return (
        <img ref={imageRef} style={{ ...style, display: 'block' }} />
    )
}

export const CreateIcon = (props) => {

    const ext = props?.file?.name?.split('.').pop();
    const isImage = (ext === 'png' || ext === 'jpg' || ext === 'jpeg');

    return (
        isImage ?
            (
                <ImageIcon file={props.file} style={props.style} />
            ) :
            (
                <IconButton sx={props.style}>
                    <InsertDriveFileIcon fontSize='100%' />
                </IconButton>
            )
    )
}
