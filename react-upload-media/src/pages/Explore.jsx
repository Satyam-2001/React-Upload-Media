import { Button, Card, CardActions, CardContent, Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

const data = [
  {
    title: '⬆️React Upload Media',
    adjective: 'React Functional Library',
    content: 'It is a library of React UI which provides component for uploading media.',
    link: 'https://www.npmjs.com/package/react-upload-media'
  },
  {
    title: '🎨React Arts',
    adjective: 'React Functional Library',
    content: 'It is a library of react functional component which provides canvas sketch board in the app with sketching tools.',
    link: 'https://www.npmjs.com/package/react-arts'
  },
  {
    title: '🖼️Jpg JS',
    adjective: 'Image Editing Module',
    content: 'It is a nodeJS module which read, manipulate, write, encode and decode image data.',
    link: 'https://www.npmjs.com/package/jpg-js'
  },
  {
    title: '🔤React Word Input',
    adjective: 'React Functional Library',
    content: 'It take value as the hinted word and callback functions onComplete/onEnter which return the word entered by user.',
    link: 'https://www.npmjs.com/package/react-word-input'
  },
]

export const Explore = () => {

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Typography component='h1' variant='h4' className="title" fontWeight={600} letterSpacing={'2px'}>Explore</Typography>
      <Typography component='p'>In addition to our media upload React component, we offer a range of other open-source packages that may be of interest to you. Our packages are designed to provide easy-to-use solutions for a variety of common programming tasks, from data visualization to manipulation and more.</Typography>
      <Grid container pt={2} spacing={isSmall ? 0 : 2}>
        {data.map((item, index) => {
          return <Grid item xs={12} sm={6} key={index} sx={{mb: {xs: 2, sm: 0}}}>
            <Card sx={{minHeight: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.adjective}
                </Typography>
                <Typography variant="p">
                  {item.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link underline='none' href={item.link} target='_blank' >Explore</Link>
                </Button>
              </CardActions>
            </Card>
          </ Grid>
        })}
      </Grid>
    </>
  )
}
