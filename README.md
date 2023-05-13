# ⬆️ React Upload Media

`React Upload Media` is a library of React UI which provides component for uploading media.

This library contains two react component `UploadMedia` and `UploadMediaModal`

<a href="https://satyam-2001.github.io/React-Upload-Media/" target="_blank">
<div align="center">
<h2 align="center" style="color:red;text-decoration:none; font-weight:500; letter-spacing:2px; font-size:large;" >⬆️Get Started</h2>
<img width="641" alt="react_arts" src="https://github.com/Satyam-2001/React-Upload-Media/assets/88069082/0b17aab3-e8f3-470b-9f08-565a28c209ad">
</div>
</a>


# Installation

This module is installed via npm:

```shell
npm install react-upload-media
```

# UploadMedia 

`UploadMedia` component is a easy-to-use Ui component ehich allows user to upload file using drag 'n' drop zone which also works on click event.

```javascript
import React, { useState } from 'react'
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


export default App;
```

## API

| Name           | Type           | Required | Default | Description                                 |
| -------------- | -------------- | -------- | ------- | ------------------------------------------- |
| primaryColor   | String         | false    | #fff    | primary color of the component
| secondaryColor | String         | false    | #99FF33 | secondary color of the component
| buttonColor    | String         | false    | #0073e6 | button Color of the component
| options        | Object         | false    | -       | Options for file input
| onSubmit       | Function       | false    | -       | Returs uploaded files

<br />

# UploadMediaModal

`UploadMediaModal` component is provides user with the feature of uploding files through the modal. This component have two extra prop then the UploadMedia which aloows the component to open and close the modal.

```javascript
import React, { useState } from 'react'
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
} 
```

## API

| Name           | Type           | Required | Default | Description                                 |
| -------------- | -------------- | -------- | ------- | ------------------------------------------- |
| open           | Boolean        | true     | false   | to open the modal
| onClose        | Function       | true     | -       | function to close the modal 
| primaryColor   | String         | false    | #fff    | primary color of the component
| secondaryColor | String         | false    | #99FF33 | secondary color of the component
| buttonColor    | String         | false    | #0073e6 | button Color of the component
| options        | Object         | false    | -       | Options for file input
| onSubmit       | Function       | false    | -       | Returs uploaded files

<br />

# Author

<a href="https://github.com/Satyam-2001"> Satyam Lohiya </a>