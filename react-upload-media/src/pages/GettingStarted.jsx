import { Box, Button, Divider, IconButton, Link, Snackbar, Typography, Paper } from '@mui/material'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import React, { useContext, useState } from 'react'
import ThemeContext from '../context/TehemeContextProvider';
import { UploadMediaModal } from '../ReactUploadMedia/UploadMediaModal';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { UploadMedia } from '../ReactUploadMedia/UploadMedia';
import Close from '@mui/icons-material/Close';
// import Prism from 'prismjs';

const code = `import React, { useState } from 'react'
import { UploadMediaModal } from 'react-upload-media';

export const App = (props) => {

    const [open, setOpen] = useState(false);
    const [files, setFiles] = useState([]);

    const submitHandler = (files) => {
        setFiles(files);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <div>
        <UploadMediaModal open={open} onClose={handleClose} onSubmit={submitHandler} />
        <button onClick={handleOpen}>Upload Media</button>
            <div>
                <p>Files Uploaded</p>
                <ul>
                    {files.map((file) => <li key={file.path}>{file.name}</li>)}
                </ul>
            </div>
        </div>
    );
} `;

const demoCode = `import React, { useState } from 'react'
import { UploadMedia } from 'react-upload-media';

export const App = (props) => {

    const [files, setFiles] = useState([]);

    const submitHandler = (files) => {
        setFiles(files);
    }

    return (
        <div>
            <UploadMedia height={'300px'} onSubmit={submitHandler} />
            <div>
                <p>Files Uploaded</p>
                <ul>
                    {files.map((file) => <li key={file.path}>{file.name}</li>)}
                </ul>
            </div>
        </div>
    );
} 
`

const Introduction = () => {
    return (
        <>
            <Typography component='h1' variant='h4' className="title" fontWeight={600} letterSpacing={'2px'}>Introduction</Typography>
            <Typography component='p'>
                Our component allows users to easily upload media to their desired location. With just a few clicks, users can select their desired media files, including images, videos, and audio, and upload them quickly and easily.
                <br /><br />Our component is designed with user experience in mind, offering a simple and intuitive interface that allows users to easily navigate through the process of uploading their media. Whether you're a content creator looking to upload your latest masterpiece, or a social media user looking to share your favorite memories, our component makes the process of uploading media a breeze.
                <br /><br />We understand that uploading media can often be a time-consuming and frustrating process, which is why we've worked hard to create a component that streamlines the process and makes it as easy as possible for users. So why wait? Give our new React component a try and see for yourself how easy it is to upload your media today!
            </Typography>
            <Typography component='h5' variant='h6' className="title" fontWeight={600} letterSpacing={'2px'}>✔️ Customizable</Typography>
            <Typography component='p'>
                In addition to its easy-to-use interface, our React component is highly customizable, allowing users to tailor it to their specific needs. Users can easily adjust various parameters, such as the maximum file size, accepted file types, and the layout and design of the component itself.
                <br /><br />Furthermore, our component is highly flexible and can be integrated seamlessly into a variety of different applications and websites, making it a versatile tool for a wide range of use cases.
                <br /><br />Whether you're looking to create a highly customized media upload experience for your users or simply want to add some basic functionality to your existing application, our React component has you covered. So why settle for a one-size-fits-all solution when you can customize our component to perfectly fit your needs?
            </Typography>
            <Divider />
        </>
    );
}



export const GettingStarted = () => {

    const [open, setOpen] = useState(false)
    const [snackBarOpen, setSnackBarClose] = useState(false)
    const { theme } = useContext(ThemeContext);
    const [files, setFiles] = useState([])
    const options = {
        multiple: true,
        // accept: "image/*",
    };

    const handleClose = () => {
        setOpen(false)
    }

    const submitHandler = (files) => {
        setFiles(files)
        setSnackBarClose(true)
    }

    const handleSnackBarClose = () => {
        setFiles([])
        setSnackBarClose(false)
    }

    const action = (
        <React.Fragment>
            <Button color="primary" size="small" onClick={handleSnackBarClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="primary"
                onClick={handleSnackBarClose}
            >
                <Close fontSize="small" color="primary" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <>
            <Typography component='h1' variant='h4' className="title" fontWeight={600} letterSpacing={'2px'}>Overview</Typography>
            <Typography component='p'>React Upload Media is a library of React UI which provides component for uploading media.</Typography>
            <Typography component='p'>It consists of namely two components.</Typography>
            <ul>
                <li>Upload Media</li>
                <li>Upload Media Modal</li>
            </ul>
            <Divider />
            <Introduction />
            <Typography component='h2' variant='h4' className="title" fontWeight={600}>Demo</Typography>
            <Typography component='p'>Here, it is a basic example of the component. The below area is a drag 'n' drop zone which also works on click event is used to upload media.</Typography>
            <Typography id='UploadMedia' component='h4' variant='h5' className="title anchor" fontWeight={600}>Upload Media Component</Typography>
            <Paper
                elevation={4}
                sx={{
                    backgroundColor: 'background.default',
                    padding: '16px'
                }}
            >
                <Box sx={{ bgcolor: 'background.default' }}>
                    <UploadMedia options={options} height={'300px'} onSubmit={submitHandler} primaryColor={theme.palette.background.default} secondaryColor={theme.palette.secondary.dark} />
                </Box>
                {files.length > 0 &&
                    (<><Box
                        p={2}
                        sx={{
                            color: 'primary.light'
                        }}>
                        <Typography variant='h6'>Files Uploaded</Typography>
                        <ul>
                            {files.map((file) => <li key={file.path}>{file.name}</li>)}
                        </ul>
                    </Box>
                        <Snackbar
                            open={snackBarOpen}
                            autoHideDuration={6000}
                            onClose={handleSnackBarClose}
                            message="Files Uploaded"
                            action={action}
                        />
                    </>)
                }
            </Paper>
            <CodeBlock>{demoCode}</CodeBlock>
            <Divider />
            <Typography id='UploadMediaModal' component='h4' variant='h5' className="title anchor" fontWeight={600}>Upload Media Modal Component</Typography>
            <Paper
                elevation={4}
                sx={{
                    backgroundColor: 'background.default',
                    padding: '16px'
                }}>
                <Box
                    p={4}
                    sx={{
                        border: theme?.palette?.border?.default,
                        borderRadius: '5px',
                    }}
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Button
                        variant='contained'
                        startIcon={<FileUploadIcon />}
                        onClick={() => setOpen(true)}
                    >
                        Upload Media
                    </Button>
                </Box>
            </Paper>
            <UploadMediaModal options={{ ...options }} open={open} onClose={handleClose} onSubmit={submitHandler} primaryColor={theme.palette.background.default} secondaryColor={theme.palette.secondary.dark} />
            <CodeBlock>{code}</CodeBlock>
        </ >
    )
}
