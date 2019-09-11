const styles = (theme) => ({
  fieldGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px',
    '& label': {
      left: 10,
      zIndex: 2,
      top: 5
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(-10px, -10px)'
    },
    [theme.breakpoints.down("sm")]: {
      margin: '0 -7.5px'
    }
  },
  avatarUploader: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottom: '1px solid #e1e1e1'
  },
  textFieldTop: {
    margin: '0 15px',
    width: 'calc(100% / 3 - 175px)',
    '& > div': {
      width: '100%',
    },
    '& > div > div': {
      background: 'white',
      padding: '5px 10px',
      border: '1px solid #e1e1e1',
      borderRadius: 4,
      '&:before': {
        content: 'none'
      }
    },
    '& input': {
      zIndex: 6
    },
    [theme.breakpoints.down("lg")]: {
      width: 'calc(100% / 3 - 30px)'
    },
    [theme.breakpoints.down("sm")]: {
      width: 'calc(100% / 2 - 15px)',
      margin: '0 7.5px'
    },
    [theme.breakpoints.down("xs")]: {
      width: 'calc(100% - 15px)',
    }
  },
  selectField: {
    margin: '16px 15px 0 15px',
    width: 120,
    '& > div': {
      width: '100%'
    },
    '& > div > div': {
      width: '100%',
      background: 'white',
      padding: '5px 10px',
      border: '1px solid #e1e1e1',
      borderRadius: 4,
      '&:before': {
        content: 'none'
      }
    },
    '& select': {
      zIndex: 6,
      margin: '0 -10px',
      padding: '6px 10px 7px',
      '&:focus': {
        background: 'inherit'
      }
    },
    [theme.breakpoints.down("lg")]: {
      width: 'calc(100% / 3 - 30px)'
    },
    [theme.breakpoints.down("sm")]: {
      width: 'calc(100% / 2 - 15px)',
      margin: '0 7.5px'
    },
    [theme.breakpoints.down("xs")]: {
      width: 'calc(100% - 15px)',
    }
  },
  heightField: {
    width: 100,
    margin: '0 15px',
    '& > div': {
      width: '100%'
    },
    '& > div > div': {
      background: 'white',
      padding: '5px 10px',
      border: '1px solid #e1e1e1',
      borderRadius: 4,
      '&:before': {
        content: 'none'
      }
    },
    '& input': {
      zIndex: 6
    },
    [theme.breakpoints.down("lg")]: {
      width: 'calc(100% / 3 - 30px)'
    },
    [theme.breakpoints.down("sm")]: {
      width: 'calc(100% / 2 - 15px)',
      margin: '0 7.5px'
    },
    [theme.breakpoints.down("xs")]: {
      width: 'calc(100% - 15px)',
    }
  },
  textArea: {
    '& textarea': {
      height: "100px!important",
      zIndex: 6
    },
    '& > div > div': {
      background: 'white',
      padding: '5px 10px',
      border: '1px solid #e1e1e1',
      borderRadius: 4,
      '&:before': {
        content: 'none'
      }
    },
    '& label': {
      left: 10,
      zIndex: 2,
      top: 5
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(-10px, -10px)'
    }
  },
  selectTags: {
    margin: '20px 0 10px 0',
    '& label': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontSize: '1rem',
      marginBottom: 5,
      display: 'block'
    }
  },
  contactForm: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -15px',
    '& label': {
      left: 10,
      zIndex: 2,
      top: 5
    },
    '& .MuiInputLabel-shrink': {
      transform: 'translate(-10px, -10px)'
    }
  },
  textFieldBottom: {
    width: 'calc(100% / 3 - 30px)',
    margin: '0 15px',
    '& > div': {
      width: '100%',
    },
    '& > div > div': {
      background: 'white',
      padding: '5px 10px',
      border: '1px solid #e1e1e1',
      borderRadius: 4,
      '&:before': {
        content: 'none'
      }
    },
    '& input': {
      zIndex: 6
    },
    [theme.breakpoints.down("sm")]: {
      width: 'calc(100% / 3 - 15px)',
      margin: '0 7.5px'
    },
    [theme.breakpoints.down("xs")]: {
      width: 'calc(100% - 15px)',
    }
  }
});

export default styles;
