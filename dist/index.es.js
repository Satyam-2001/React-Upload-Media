import React, { useRef, useEffect, useContext, useState, useLayoutEffect } from 'react';
import { IconButton, Box, Stack, Typography, Grid, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Box$1 from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

function verifyAccept(file_type, accept) {
  if (accept === null || accept === undefined) return true;
  var type_regex = new RegExp(accept.replace(/\*/g, '.\*').replace(/\,/g, '|'));
  return type_regex.test(file_type);
}
var useDropZone = function useDropZone() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var INPUT_PROP_ID = "react-upload-media-input-".concat(Math.floor(Math.random() * 100));
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isDragActive = _React$useState2[0],
    setIsDragActive = _React$useState2[1];
  var _React$useState3 = React.useState([]),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    files = _React$useState4[0],
    setFiles = _React$useState4[1];
  var option_style = options.style;
  var rootProps = {
    onDragOver: function onDragOver(event) {
      event.preventDefault();
    },
    onDragEnter: function onDragEnter(event) {
      setIsDragActive(true);
    },
    onDragLeave: function onDragLeave(event) {
      setIsDragActive(false);
    },
    onDrop: function onDrop(event) {
      event.preventDefault();
      var new_files = Array.from(event.dataTransfer.files).filter(function (file) {
        return verifyAccept(file.type, options.accept);
      });
      setFiles(function (files) {
        return [].concat(_toConsumableArray(files), _toConsumableArray(new_files));
      });
    },
    onClick: function onClick(event) {
      document.getElementById(INPUT_PROP_ID).click();
    }
  };
  var inputProps = _objectSpread2(_objectSpread2({}, options), {}, {
    id: INPUT_PROP_ID,
    type: 'file',
    onChange: function onChange(event) {
      setFiles(function (files) {
        return [].concat(_toConsumableArray(files), _toConsumableArray(event.target.files));
      });
    },
    style: _objectSpread2(_objectSpread2({}, option_style ? option_style : {}), {}, {
      display: 'none'
    })
  });
  var removeFile = function removeFile(file) {
    setFiles(function (files) {
      return files.filter(function (_file) {
        return _file.name !== file.name;
      });
    });
  };
  return {
    isDragActive: isDragActive,
    files: files,
    rootProps: rootProps,
    inputProps: inputProps,
    removeFile: removeFile
  };
};

var ImageIcon = function ImageIcon(_ref) {
  var file = _ref.file,
    style = _ref.style;
  var imageRef = useRef();
  useEffect(function () {
    imageRef.current.src = URL.createObjectURL(file);
  }, [file]);
  return /*#__PURE__*/React.createElement("img", {
    ref: imageRef,
    style: _objectSpread2(_objectSpread2({}, style), {}, {
      display: 'block'
    })
  });
};
var CreateIcon = function CreateIcon(props) {
  var _props$file, _props$file$name;
  var ext = props === null || props === void 0 ? void 0 : (_props$file = props.file) === null || _props$file === void 0 ? void 0 : (_props$file$name = _props$file.name) === null || _props$file$name === void 0 ? void 0 : _props$file$name.split('.').pop();
  var isImage = ext === 'png' || ext === 'jpg' || ext === 'jpeg';
  return isImage ? /*#__PURE__*/React.createElement(ImageIcon, {
    file: props.file,
    style: props.style
  }) : /*#__PURE__*/React.createElement(IconButton, {
    sx: props.style
  }, /*#__PURE__*/React.createElement(InsertDriveFileIcon, {
    fontSize: "100%"
  }));
};

var ColorContext = /*#__PURE__*/React.createContext({
  primaryColor: '#0073e6',
  secondaryColor: '#fff',
  buttonColor: '#0073e6'
});

var iconStyle = {
  borderRadius: '5px',
  height: '100%',
  width: '100%',
  cursor: 'pointer'
};
var FileIcon = function FileIcon(props) {
  var _useContext = useContext(ColorContext);
    _useContext.primaryColor;
    var secondaryColor = _useContext.secondaryColor;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hover = _useState2[0],
    setHover = _useState2[1];
  return /*#__PURE__*/React.createElement(Box, {
    style: {
      position: 'relative',
      overflow: 'hidden'
    },
    sx: {
      border: props.selected ? '2px solid' : '1px solid rgba(100, 100, 100, 0.4)',
      borderColor: props.selected ? secondaryColor : 'grey',
      borderRadius: '5px',
      height: '56px',
      width: '56px'
    },
    onMouseOver: function onMouseOver() {
      return setHover(true);
    },
    onMouseOut: function onMouseOut() {
      return setHover(false);
    },
    onClick: props.onClick
  }, /*#__PURE__*/React.createElement(CreateIcon, {
    file: props.file,
    style: iconStyle
  }), hover && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: '9000',
      top: 0,
      right: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(CloseIcon, {
    sx: {
      zIndex: '5000',
      cursor: 'pointer',
      bgcolor: secondaryColor,
      borderRadius: '50%'
    },
    fontSize: '5px',
    margin: '4px',
    pading: '4px',
    onClick: function onClick() {
      return props.onDelete(props.file);
    }
  })));
};

function ReadableFileSize(bytes) {
  if (Math.abs(bytes) < 1023) {
    return bytes + ' B';
  }
  var units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var u = -1;
  do {
    bytes /= 1024;
    ++u;
  } while (Math.round(Math.abs(bytes)) >= 1024 && u < units.length - 1);
  return bytes.toFixed(1) + ' ' + units[u];
}
var FileStack = function FileStack(props) {
  var _props$files, _props$options;
  var ref = useRef();
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    height = _useState2[0],
    setHeight = _useState2[1];
  var _useState3 = useState(props === null || props === void 0 ? void 0 : (_props$files = props.files) === null || _props$files === void 0 ? void 0 : _props$files[0]),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedFile = _useState4[0],
    setSelectedFile = _useState4[1];
  var _useContext = useContext(ColorContext),
    buttonColor = _useContext.buttonColor;
  var removeFile = function removeFile(file) {
    if (file.name === (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name)) {
      var _props$files2;
      var index = props.files.findIndex(function (file) {
        return file.name === selectedFile.name;
      });
      var nextItem = (index + 1) % props.files.length;
      setSelectedFile(props === null || props === void 0 ? void 0 : (_props$files2 = props.files) === null || _props$files2 === void 0 ? void 0 : _props$files2[nextItem]);
    }
    props.removeFile(file);
  };
  useLayoutEffect(function () {
    var height = ref.current.clientHeight;
    setHeight(height - 16);
  }, []);
  return /*#__PURE__*/React.createElement(Stack, {
    flexGrow: 1,
    direction: "column",
    spacing: 2,
    height: props.height
  }, /*#__PURE__*/React.createElement(Stack, {
    flexGrow: 1,
    alignItems: "center",
    height: '0%'
  }, /*#__PURE__*/React.createElement(Typography, {
    sx: {
      whiteSpace: 'nowrap',
      overflow: 'auto'
    },
    width: '80%',
    textAlign: "center"
  }, selectedFile.name), /*#__PURE__*/React.createElement(Grid, {
    container: true,
    display: 'flex'
    // sx={{ maxWidth: '80%', maxHeight: '60%', boxSizing: 'border-box' }}
    ,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    direction: "column",
    ref: ref
  }, /*#__PURE__*/React.createElement(CreateIcon, {
    file: selectedFile,
    style: {
      maxWidth: '80%',
      maxHeight: height,
      overflow: 'hidden',
      fontSize: height
    }
  })), /*#__PURE__*/React.createElement(Typography, null, ReadableFileSize(selectedFile.size))), /*#__PURE__*/React.createElement(Stack, {
    direction: "row",
    spacing: 2,
    justifyContent: "center",
    boxSizing: 'border-box'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'auto',
      overflow: 'auto',
      whiteSpace: 'nowrap'
    }
  }, props.files.map(function (file) {
    return /*#__PURE__*/React.createElement(Box, {
      px: 1,
      margin: 'auto',
      display: "inline-block",
      key: file.name
    }, /*#__PURE__*/React.createElement(FileIcon, {
      key: file.name,
      file: file,
      onClick: function onClick() {
        return setSelectedFile(file);
      },
      selected: file.name === selectedFile.name,
      onDelete: removeFile
    }));
  })), (props === null || props === void 0 ? void 0 : (_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.multiple) === true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", props.inputProp), /*#__PURE__*/React.createElement(IconButton, {
    sx: {
      border: '1px solid grey',
      borderRadius: '5px',
      height: '56px',
      width: '56px'
    },
    pb: 1,
    onClick: function onClick() {
      return document.getElementById(props.inputProp.id).click();
    }
  }, /*#__PURE__*/React.createElement(AddIcon, null))), /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    sx: {
      height: '56px',
      padding: '0 16px',
      bgcolor: buttonColor
    },
    onClick: props.onSubmit ? props.onSubmit : function () {}
  }, "Done")));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "::-webkit-scrollbar{height:4px}::-webkit-scrollbar-track{border-radius:2px}::-webkit-scrollbar-thumb{background:grey;border-radius:2px}::-webkit-scrollbar-thumb:hover{background:grey}";
styleInject(css_248z);

var UploadMedia = function UploadMedia(props) {
  var primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    buttonColor = props.buttonColor;
  var _useDropZone = useDropZone(props.options),
    isDragActive = _useDropZone.isDragActive,
    files = _useDropZone.files,
    rootProps = _useDropZone.rootProps,
    inputProps = _useDropZone.inputProps,
    removeFile = _useDropZone.removeFile;
  var submitHandler = function submitHandler() {
    var _props$onSubmit;
    props === null || props === void 0 ? void 0 : (_props$onSubmit = props.onSubmit) === null || _props$onSubmit === void 0 ? void 0 : _props$onSubmit.call(props, files);
  };
  var isFileExist = Boolean(files.length > 0);
  return /*#__PURE__*/React.createElement(ColorContext.Provider, {
    value: {
      primaryColor: primaryColor || '#0073e6',
      secondaryColor: secondaryColor || '#fff',
      buttonColor: buttonColor || '#0073e6'
    }
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: "column",
    width: '100%',
    height: props.height ? props.height : '100%',
    bgcolor: primaryColor || '#0073e6'
  }, !isFileExist && /*#__PURE__*/React.createElement(Stack, _extends({}, rootProps, {
    sx: {
      border: '3px dashed grey',
      borderRadius: '5px',
      boxSizing: 'border-box',
      '&:hover': {
        backgroundColor: 'rgba(200, 200, 200, 0.3)',
        borderColor: secondaryColor,
        cursor: 'pointer',
        color: secondaryColor
      }
    },
    p: 2,
    m: 2,
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    // height='100%'
  }), /*#__PURE__*/React.createElement("input", _extends({
    style: {
      display: 'none'
    }
  }, inputProps)), isDragActive ? /*#__PURE__*/React.createElement("p", null, "Drop the files here ...") : /*#__PURE__*/React.createElement("p", null, "Upload a file...")), isFileExist && /*#__PURE__*/React.createElement(FileStack, {
    onSubmit: submitHandler,
    files: files,
    removeFile: removeFile,
    inputProp: inputProps,
    options: props.options
  })));
};

var StyledModal = function StyledModal(props) {
  var color = props.color;
  var style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: color,
    borderRadius: '15px',
    boxShadow: 24,
    p: 1
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: props.open,
    onClose: props.onClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/React.createElement(Box$1, {
    sx: style,
    width: props.width !== undefined ? props.width : 'auto',
    height: props.height !== undefined ? props.height : 'auto'
  }, props.children));
};

var UploadMediaModal = function UploadMediaModal(props) {
  var primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor;
  return /*#__PURE__*/React.createElement(StyledModal, {
    open: props.open,
    onClose: props.onClose,
    width: "600px",
    height: "400px",
    color: primaryColor
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: "column",
    width: '100%',
    height: '100%'
  }, /*#__PURE__*/React.createElement(Stack, {
    direction: "row-reverse"
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: props.onClose,
    sx: {
      '&:hover': {
        color: secondaryColor
      }
    }
  }, /*#__PURE__*/React.createElement(CloseIcon, null))), /*#__PURE__*/React.createElement(UploadMedia, props)));
};

export { UploadMedia, UploadMediaModal };
