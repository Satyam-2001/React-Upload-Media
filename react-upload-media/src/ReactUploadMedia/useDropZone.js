import React, { useState } from 'react'

function verifyAccept(file_type, accept) {
  if (accept === null || accept === undefined) return true;
  var type_regex = new RegExp(accept.replace(/\*/g, '.\*').replace(/\,/g, '|'));
  return type_regex.test(file_type);
}

export const useDropZone = (options = {}) => {

  const INPUT_PROP_ID = `react-upload-media-input-${Math.floor(Math.random() * 100)}`;

  const [isDragActive, setIsDragActive] = React.useState(false);
  const [files, setFiles] = React.useState([]);

  const option_style = options.style;

  const rootProps = {
    onDragOver: (event) => { event.preventDefault(); },
    onDragEnter: (event) => { setIsDragActive(true); },
    onDragLeave: (event) => { setIsDragActive(false); },
    onDrop: (event) => {
      event.preventDefault();
      const new_files = Array.from(event.dataTransfer.files).filter(file => verifyAccept(file.type, options.accept));
      setFiles(files => [...files, ...new_files])
    },
    onClick: (event) => {document.getElementById(INPUT_PROP_ID).click();},
  };

  const inputProps = {
    ...options,
    id: INPUT_PROP_ID,
    type: 'file',
    onChange: (event) => {setFiles(files => [...files, ...event.target.files])},
    style: { ...(option_style ? option_style : {}), display: 'none' },
  };

  const removeFile = (file) => {
    setFiles(files => files.filter((_file) => _file.name !== file.name))
  }

  return { isDragActive, files, rootProps, inputProps, removeFile };
}