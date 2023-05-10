import { Box, Button, Grid, ToggleButton, ToggleButtonGroup, Typography, Paper } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/TehemeContextProvider';
import { UploadMedia } from '../ReactUploadMedia/UploadMedia';
import { MuiColorInput } from 'mui-color-input'
import { CodeBlock } from '../components/CodeBlock/CodeBlock';
import { UploadMediaModal } from '../ReactUploadMedia/UploadMediaModal';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const MediaModalHandle = (props) => {
  const [open, setOpen] = useState(false)
  const { theme } = useContext(ThemeContext)

  return (
    <>
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
          sx={{ bgcolor: props.buttonColor }}
        >
          Upload Media
        </Button>
      </Box>
      <UploadMediaModal open={open} onClose={() => setOpen(false)} {...props} />
    </>
  )
}


export const Usage = () => {

  const { theme } = useContext(ThemeContext);
  const [component, setComponent] = useState('Upload Media')
  const [primaryColor, setPrimaryColor] = useState('#fff')
  const [secondaryColor, setSecondaryColor] = useState('#fff')
  const [buttonColor, setButtonColor] = useState('rgb(37, 156, 242)')
  const [options, setOptions] = useState({ multiple: false })
  const [fileType, setFileType] = useState(['image'])

  useEffect(() => {
    if (fileType.includes('Any')) {
      return setOptions(prev => { return { ...prev, accept: '/*' } })
    }
    const accept = fileType.join('/*,') + '/*'
    setOptions(prev => { return { ...prev, accept } })
  }, [fileType])

  useEffect(() => {
    setPrimaryColor(theme.palette.background.default)
    setSecondaryColor(theme.palette.secondary.dark)
  }, [theme])

  const handleMultipleChange = (e, value) => {
    setOptions(prev => { return { ...prev, multiple: value === 'True' } })
  }

  const handleComponentChange = (e, value) => {
    setComponent(value)
  }

  const handleFiltTypeChange = (e, value) => {
    if (value.includes('Any')) { return setFileType(['Any', 'audio', 'video', 'txt', 'image']) }
    setFileType(value)
  }


  return (
    <>
      <Typography component='h1' variant='h4' className="title" fontWeight={600} letterSpacing={'2px'}>Usage</Typography>
      <Typography>
        Using our media upload React component is a breeze. Simply import the component into your React application, add it to your desired location in the code, and you're ready to go.
        <br /><br />Once the component is rendered on your page, users can simply click on the "Upload files" button to choose their desired media files for upload. The component will automatically handle the upload process, displaying progress indicators and notifying the user once the upload is complete.
      </Typography>
      <Paper elevation={4}>
        <Box p={2} sx={{ bgcolor: 'background.default' }}>
          <Grid sx={{ bgcolor: 'background.default' }} p={2} display='flex' justifyContent={'center'}>
            <ToggleButtonGroup
              color="primary"
              value={component}
              exclusive
              onChange={handleComponentChange}
              aria-label="Platform"
              fullWidth
            >
              <ToggleButton value="Upload Media">Upload Media</ToggleButton>
              <ToggleButton value="Upload Media Modal">Upload Media Modal</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Box sx={{ bgcolor: 'background.default' }}>
            {component === 'Upload Media' ?
              <UploadMedia options={options} height={'300px'} onSubmit={console.log} primaryColor={primaryColor} secondaryColor={secondaryColor} buttonColor={buttonColor} />
              :
              <MediaModalHandle options={options} onSubmit={console.log} primaryColor={primaryColor} secondaryColor={secondaryColor} buttonColor={buttonColor} />
            }
          </Box>
          <Grid container sx={{ bgcolor: 'background.default', width: '100%' }} py={2} m={0} spacing={2}>
            <Grid item xs={12} sm={4} display='flex' justifyContent={'center'}>
              <Box>
                <Typography>Primary Color</Typography>
                <MuiColorInput value={primaryColor} onChange={setPrimaryColor} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} display='flex' justifyContent={'center'}>
              <Box>
                <Typography>Secondary Color</Typography>
                <MuiColorInput value={secondaryColor} onChange={setSecondaryColor} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} display='flex' justifyContent={'center'}>
              <Box>
                <Typography>Button Color</Typography>
                <MuiColorInput value={buttonColor} onChange={setButtonColor} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} display='flex' justifyContent={'space-around'} alignItems='center'>
              <Typography>Multiple</Typography>
              <ToggleButtonGroup
                color="primary"
                value={options.multiple ? 'True' : 'False'}
                exclusive
                onChange={handleMultipleChange}
                aria-label="Platform"
              >
                <ToggleButton value="False">False</ToggleButton>
                <ToggleButton value="True">True</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item xs={8} sx={{display: {xs: 'none', sm: 'flex',}}} justifyContent={'space-around'} alignItems='center' direction={'row'} flexGrow={1}>
              <Typography>File Type</Typography>
              <ToggleButtonGroup
                color="primary"
                value={fileType}
                onChange={handleFiltTypeChange}
                aria-label="Platform"

              >
                <ToggleButton value="image">Image</ToggleButton>
                <ToggleButton value="video">Video</ToggleButton>
                <ToggleButton value="audio">Audio</ToggleButton>
                <ToggleButton value="txt">Text</ToggleButton>
                <ToggleButton value="Any">Any</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid xs={12} m={3} sx={{padding: 0}}>
              <CodeBlock height={'400px'}>
                {component === 'Upload Media' ?
                  `import React, { useState } from 'react'
import { UploadMedia } from 'react-upload-media';

export const App = (props) => {

  const [files, setFiles] = useState([]);
  const options = {
    multiple: ${options.multiple},
    accept: '${options.accept}'
  }

  const submitHandler = (files) => {
      console.log(files);
  }

  return (
      <div>
          <UploadMedia 
            onSubmit={submitHandler} 
            options={options}
            primaryColor='${primaryColor}' 
            secondaryColor='${secondaryColor}' 
            buttonColor='${buttonColor}' 
          />
      </div>
  );
} ` :
                  `import React, { useState } from 'react'
import { UploadMediaModal } from 'react-upload-media';

export const App = (props) => {

  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false)
  const options = {
    multiple: ${options.multiple},
    accept: '${options.accept}'
  }

  const submitHandler = (files) => {
      console.log(files);
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
      <div>
          <button onClick={() => setOpen(ture)}>Upload Media</button>
          <UploadMediaModal
            open={open}
            onClose={handleClose}
            onSubmit={submitHandler} 
            options={options}
            primaryColor='${primaryColor}' 
            secondaryColor='${secondaryColor}' 
            buttonColor='${buttonColor}' 
          />
      </div>
  );
}
`}
              </CodeBlock>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  )
}
